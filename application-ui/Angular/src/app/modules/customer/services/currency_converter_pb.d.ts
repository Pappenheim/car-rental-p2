import * as jspb from 'google-protobuf'



export class ConvertCurrencyRequest extends jspb.Message {
  getFromCurrency(): string;
  setFromCurrency(value: string): ConvertCurrencyRequest;

  getToCurrency(): string;
  setToCurrency(value: string): ConvertCurrencyRequest;

  getAmount(): number;
  setAmount(value: number): ConvertCurrencyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertCurrencyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertCurrencyRequest): ConvertCurrencyRequest.AsObject;
  static serializeBinaryToWriter(message: ConvertCurrencyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertCurrencyRequest;
  static deserializeBinaryFromReader(message: ConvertCurrencyRequest, reader: jspb.BinaryReader): ConvertCurrencyRequest;
}

export namespace ConvertCurrencyRequest {
  export type AsObject = {
    fromCurrency: string,
    toCurrency: string,
    amount: number,
  }
}

export class ConvertCurrencyResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): ConvertCurrencyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConvertCurrencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConvertCurrencyResponse): ConvertCurrencyResponse.AsObject;
  static serializeBinaryToWriter(message: ConvertCurrencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConvertCurrencyResponse;
  static deserializeBinaryFromReader(message: ConvertCurrencyResponse, reader: jspb.BinaryReader): ConvertCurrencyResponse;
}

export namespace ConvertCurrencyResponse {
  export type AsObject = {
    message: string,
  }
}

