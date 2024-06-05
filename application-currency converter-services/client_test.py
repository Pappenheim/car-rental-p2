import grpc
import currency_converter_pb2
import currency_converter_pb2_grpc


def convert_currency(from_currency, to_currency, amount):
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = currency_converter_pb2_grpc.CurrencyConverterStub(channel)
        request = currency_converter_pb2.ConvertCurrencyRequest(from_currency=from_currency, to_currency=to_currency,
                                                                amount=amount)
        response = stub.ConvertCurrency(request)
        return response.message


if __name__ == '__main__':
    from_currency = 'USD'
    to_currency = 'EUR'
    amount = 100

    # Make the conversion request
    print(f"Converting {amount} {from_currency} to {to_currency}...")
    result = convert_currency(from_currency, to_currency, amount)

    if result:
        print(f"Response: {result}")
    else:
        print("Failed to get a response from the service.")
