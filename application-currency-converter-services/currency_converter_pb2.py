# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: currency_converter.proto
# Protobuf Python Version: 5.26.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x18\x63urrency_converter.proto\x12\x11\x63urrencyconverter\"T\n\x16\x43onvertCurrencyRequest\x12\x15\n\rfrom_currency\x18\x01 \x01(\t\x12\x13\n\x0bto_currency\x18\x02 \x01(\t\x12\x0e\n\x06\x61mount\x18\x03 \x01(\x01\"*\n\x17\x43onvertCurrencyResponse\x12\x0f\n\x07message\x18\x01 \x01(\t2}\n\x11\x43urrencyConverter\x12h\n\x0f\x43onvertCurrency\x12).currencyconverter.ConvertCurrencyRequest\x1a*.currencyconverter.ConvertCurrencyResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'currency_converter_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_CONVERTCURRENCYREQUEST']._serialized_start=47
  _globals['_CONVERTCURRENCYREQUEST']._serialized_end=131
  _globals['_CONVERTCURRENCYRESPONSE']._serialized_start=133
  _globals['_CONVERTCURRENCYRESPONSE']._serialized_end=175
  _globals['_CURRENCYCONVERTER']._serialized_start=177
  _globals['_CURRENCYCONVERTER']._serialized_end=302
# @@protoc_insertion_point(module_scope)