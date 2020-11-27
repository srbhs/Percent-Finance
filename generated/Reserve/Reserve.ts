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

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ReserveRateMantissaSet extends ethereum.Event {
  get params(): ReserveRateMantissaSet__Params {
    return new ReserveRateMantissaSet__Params(this);
  }
}

export class ReserveRateMantissaSet__Params {
  _event: ReserveRateMantissaSet;

  constructor(event: ReserveRateMantissaSet) {
    this._event = event;
  }

  get rateMantissa(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Reserve extends ethereum.SmartContract {
  static bind(address: Address): Reserve {
    return new Reserve("Reserve", address);
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rateMantissa(): BigInt {
    let result = super.call("rateMantissa", "rateMantissa():(uint256)", []);

    return result[0].toBigInt();
  }

  try_rateMantissa(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("rateMantissa", "rateMantissa():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  reserveRateMantissa(param0: Address): BigInt {
    let result = super.call(
      "reserveRateMantissa",
      "reserveRateMantissa(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_reserveRateMantissa(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "reserveRateMantissa",
      "reserveRateMantissa(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  withdrawReserve(prizePool: Address, to: Address): BigInt {
    let result = super.call(
      "withdrawReserve",
      "withdrawReserve(address,address):(uint256)",
      [ethereum.Value.fromAddress(prizePool), ethereum.Value.fromAddress(to)]
    );

    return result[0].toBigInt();
  }

  try_withdrawReserve(
    prizePool: Address,
    to: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdrawReserve",
      "withdrawReserve(address,address):(uint256)",
      [ethereum.Value.fromAddress(prizePool), ethereum.Value.fromAddress(to)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetRateMantissaCall extends ethereum.Call {
  get inputs(): SetRateMantissaCall__Inputs {
    return new SetRateMantissaCall__Inputs(this);
  }

  get outputs(): SetRateMantissaCall__Outputs {
    return new SetRateMantissaCall__Outputs(this);
  }
}

export class SetRateMantissaCall__Inputs {
  _call: SetRateMantissaCall;

  constructor(call: SetRateMantissaCall) {
    this._call = call;
  }

  get _rateMantissa(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetRateMantissaCall__Outputs {
  _call: SetRateMantissaCall;

  constructor(call: SetRateMantissaCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawReserveCall extends ethereum.Call {
  get inputs(): WithdrawReserveCall__Inputs {
    return new WithdrawReserveCall__Inputs(this);
  }

  get outputs(): WithdrawReserveCall__Outputs {
    return new WithdrawReserveCall__Outputs(this);
  }
}

export class WithdrawReserveCall__Inputs {
  _call: WithdrawReserveCall;

  constructor(call: WithdrawReserveCall) {
    this._call = call;
  }

  get prizePool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class WithdrawReserveCall__Outputs {
  _call: WithdrawReserveCall;

  constructor(call: WithdrawReserveCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
