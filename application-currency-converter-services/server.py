from concurrent import futures
import grpc
import currency_converter_pb2
import currency_converter_pb2_grpc
from ecb_data import fetch_ecb_rates, convert


class CurrencyConverterService(currency_converter_pb2_grpc.CurrencyConverterServicer):
    def ConvertCurrency(self, request, context):
        rates = fetch_ecb_rates()
        converted_amount = convert(request.from_currency, request.to_currency, request.amount, rates)
        message = f"Converted {request.amount} {request.from_currency} to {converted_amount} {request.to_currency}"
        return currency_converter_pb2.ConvertCurrencyResponse(message=message)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    currency_converter_pb2_grpc.add_CurrencyConverterServicer_to_server(CurrencyConverterService(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    print("gRPC server starting on port 50051...")
    server.wait_for_termination()


if __name__ == '__main__':
    serve()
