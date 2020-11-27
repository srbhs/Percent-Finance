// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PrizePoolCreated extends ethereum.Event {
  get params(): PrizePoolCreated__Params {
    return new PrizePoolCreated__Params(this);
  }
}

export class PrizePoolCreated__Params {
  _event: PrizePoolCreated;

  constructor(event: PrizePoolCreated) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get prizePool(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class CompoundPrizePoolBuilder__createCompoundPrizePoolInputConfigStruct extends ethereum.Tuple {
  get cToken(): Address {
    return this[0].toAddress();
  }

  get maxExitFeeMantissa(): BigInt {
    return this[1].toBigInt();
  }

  get maxTimelockDuration(): BigInt {
    return this[2].toBigInt();
  }
}

export class CompoundPrizePoolBuilder__createSingleRandomWinnerInputPrizePoolConfigStruct extends ethereum.Tuple {
  get cToken(): Address {
    return this[0].toAddress();
  }

  get maxExitFeeMantissa(): BigInt {
    return this[1].toBigInt();
  }

  get maxTimelockDuration(): BigInt {
    return this[2].toBigInt();
  }
}

export class CompoundPrizePoolBuilder__createSingleRandomWinnerInputPrizeStrategyConfigStruct extends ethereum.Tuple {
  get rngService(): Address {
    return this[0].toAddress();
  }

  get prizePeriodStart(): BigInt {
    return this[1].toBigInt();
  }

  get prizePeriodSeconds(): BigInt {
    return this[2].toBigInt();
  }

  get ticketName(): string {
    return this[3].toString();
  }

  get ticketSymbol(): string {
    return this[4].toString();
  }

  get sponsorshipName(): string {
    return this[5].toString();
  }

  get sponsorshipSymbol(): string {
    return this[6].toString();
  }

  get ticketCreditLimitMantissa(): BigInt {
    return this[7].toBigInt();
  }

  get ticketCreditRateMantissa(): BigInt {
    return this[8].toBigInt();
  }

  get externalERC20Awards(): Array<Address> {
    return this[9].toAddressArray();
  }
}

export class CompoundPrizePoolBuilder extends ethereum.SmartContract {
  static bind(address: Address): CompoundPrizePoolBuilder {
    return new CompoundPrizePoolBuilder("CompoundPrizePoolBuilder", address);
  }

  compoundPrizePoolProxyFactory(): Address {
    let result = super.call(
      "compoundPrizePoolProxyFactory",
      "compoundPrizePoolProxyFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_compoundPrizePoolProxyFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "compoundPrizePoolProxyFactory",
      "compoundPrizePoolProxyFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createCompoundPrizePool(
    config: CompoundPrizePoolBuilder__createCompoundPrizePoolInputConfigStruct
  ): Address {
    let result = super.call(
      "createCompoundPrizePool",
      "createCompoundPrizePool((address,uint256,uint256)):(address)",
      [ethereum.Value.fromTuple(config)]
    );

    return result[0].toAddress();
  }

  try_createCompoundPrizePool(
    config: CompoundPrizePoolBuilder__createCompoundPrizePoolInputConfigStruct
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createCompoundPrizePool",
      "createCompoundPrizePool((address,uint256,uint256)):(address)",
      [ethereum.Value.fromTuple(config)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createSingleRandomWinner(
    prizePoolConfig: CompoundPrizePoolBuilder__createSingleRandomWinnerInputPrizePoolConfigStruct,
    prizeStrategyConfig: CompoundPrizePoolBuilder__createSingleRandomWinnerInputPrizeStrategyConfigStruct,
    decimals: i32
  ): Address {
    let result = super.call(
      "createSingleRandomWinner",
      "createSingleRandomWinner((address,uint256,uint256),(address,uint256,uint256,string,string,string,string,uint256,uint256,address[]),uint8):(address)",
      [
        ethereum.Value.fromTuple(prizePoolConfig),
        ethereum.Value.fromTuple(prizeStrategyConfig),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(decimals))
      ]
    );

    return result[0].toAddress();
  }

  try_createSingleRandomWinner(
    prizePoolConfig: CompoundPrizePoolBuilder__createSingleRandomWinnerInputPrizePoolConfigStruct,
    prizeStrategyConfig: CompoundPrizePoolBuilder__createSingleRandomWinnerInputPrizeStrategyConfigStruct,
    decimals: i32
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createSingleRandomWinner",
      "createSingleRandomWinner((address,uint256,uint256),(address,uint256,uint256,string,string,string,string,uint256,uint256,address[]),uint8):(address)",
      [
        ethereum.Value.fromTuple(prizePoolConfig),
        ethereum.Value.fromTuple(prizeStrategyConfig),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(decimals))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reserveRegistry(): Address {
    let result = super.call(
      "reserveRegistry",
      "reserveRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_reserveRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "reserveRegistry",
      "reserveRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  singleRandomWinnerBuilder(): Address {
    let result = super.call(
      "singleRandomWinnerBuilder",
      "singleRandomWinnerBuilder():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_singleRandomWinnerBuilder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "singleRandomWinnerBuilder",
      "singleRandomWinnerBuilder():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  trustedForwarder(): Address {
    let result = super.call(
      "trustedForwarder",
      "trustedForwarder():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_trustedForwarder(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "trustedForwarder",
      "trustedForwarder():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _reserveRegistry(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _trustedForwarder(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _compoundPrizePoolProxyFactory(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _singleRandomWinnerBuilder(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateCompoundPrizePoolCall extends ethereum.Call {
  get inputs(): CreateCompoundPrizePoolCall__Inputs {
    return new CreateCompoundPrizePoolCall__Inputs(this);
  }

  get outputs(): CreateCompoundPrizePoolCall__Outputs {
    return new CreateCompoundPrizePoolCall__Outputs(this);
  }
}

export class CreateCompoundPrizePoolCall__Inputs {
  _call: CreateCompoundPrizePoolCall;

  constructor(call: CreateCompoundPrizePoolCall) {
    this._call = call;
  }

  get config(): CreateCompoundPrizePoolCallConfigStruct {
    return this._call.inputValues[0].value.toTuple() as CreateCompoundPrizePoolCallConfigStruct;
  }
}

export class CreateCompoundPrizePoolCall__Outputs {
  _call: CreateCompoundPrizePoolCall;

  constructor(call: CreateCompoundPrizePoolCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateCompoundPrizePoolCallConfigStruct extends ethereum.Tuple {
  get cToken(): Address {
    return this[0].toAddress();
  }

  get maxExitFeeMantissa(): BigInt {
    return this[1].toBigInt();
  }

  get maxTimelockDuration(): BigInt {
    return this[2].toBigInt();
  }
}

export class CreateSingleRandomWinnerCall extends ethereum.Call {
  get inputs(): CreateSingleRandomWinnerCall__Inputs {
    return new CreateSingleRandomWinnerCall__Inputs(this);
  }

  get outputs(): CreateSingleRandomWinnerCall__Outputs {
    return new CreateSingleRandomWinnerCall__Outputs(this);
  }
}

export class CreateSingleRandomWinnerCall__Inputs {
  _call: CreateSingleRandomWinnerCall;

  constructor(call: CreateSingleRandomWinnerCall) {
    this._call = call;
  }

  get prizePoolConfig(): CreateSingleRandomWinnerCallPrizePoolConfigStruct {
    return this._call.inputValues[0].value.toTuple() as CreateSingleRandomWinnerCallPrizePoolConfigStruct;
  }

  get prizeStrategyConfig(): CreateSingleRandomWinnerCallPrizeStrategyConfigStruct {
    return this._call.inputValues[1].value.toTuple() as CreateSingleRandomWinnerCallPrizeStrategyConfigStruct;
  }

  get decimals(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class CreateSingleRandomWinnerCall__Outputs {
  _call: CreateSingleRandomWinnerCall;

  constructor(call: CreateSingleRandomWinnerCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateSingleRandomWinnerCallPrizePoolConfigStruct extends ethereum.Tuple {
  get cToken(): Address {
    return this[0].toAddress();
  }

  get maxExitFeeMantissa(): BigInt {
    return this[1].toBigInt();
  }

  get maxTimelockDuration(): BigInt {
    return this[2].toBigInt();
  }
}

export class CreateSingleRandomWinnerCallPrizeStrategyConfigStruct extends ethereum.Tuple {
  get rngService(): Address {
    return this[0].toAddress();
  }

  get prizePeriodStart(): BigInt {
    return this[1].toBigInt();
  }

  get prizePeriodSeconds(): BigInt {
    return this[2].toBigInt();
  }

  get ticketName(): string {
    return this[3].toString();
  }

  get ticketSymbol(): string {
    return this[4].toString();
  }

  get sponsorshipName(): string {
    return this[5].toString();
  }

  get sponsorshipSymbol(): string {
    return this[6].toString();
  }

  get ticketCreditLimitMantissa(): BigInt {
    return this[7].toBigInt();
  }

  get ticketCreditRateMantissa(): BigInt {
    return this[8].toBigInt();
  }

  get externalERC20Awards(): Array<Address> {
    return this[9].toAddressArray();
  }
}