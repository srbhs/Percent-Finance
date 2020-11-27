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

export class CreatedControlledToken extends ethereum.Event {
  get params(): CreatedControlledToken__Params {
    return new CreatedControlledToken__Params(this);
  }
}

export class CreatedControlledToken__Params {
  _event: CreatedControlledToken;

  constructor(event: CreatedControlledToken) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CreatedTicket extends ethereum.Event {
  get params(): CreatedTicket__Params {
    return new CreatedTicket__Params(this);
  }
}

export class CreatedTicket__Params {
  _event: CreatedTicket;

  constructor(event: CreatedTicket) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ControlledTokenBuilder__createControlledTokenInputConfigStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get decimals(): i32 {
    return this[2].toI32();
  }

  get controller(): Address {
    return this[3].toAddress();
  }
}

export class ControlledTokenBuilder__createTicketInputConfigStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get decimals(): i32 {
    return this[2].toI32();
  }

  get controller(): Address {
    return this[3].toAddress();
  }
}

export class ControlledTokenBuilder extends ethereum.SmartContract {
  static bind(address: Address): ControlledTokenBuilder {
    return new ControlledTokenBuilder("ControlledTokenBuilder", address);
  }

  controlledTokenProxyFactory(): Address {
    let result = super.call(
      "controlledTokenProxyFactory",
      "controlledTokenProxyFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_controlledTokenProxyFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "controlledTokenProxyFactory",
      "controlledTokenProxyFactory():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createControlledToken(
    config: ControlledTokenBuilder__createControlledTokenInputConfigStruct
  ): Address {
    let result = super.call(
      "createControlledToken",
      "createControlledToken((string,string,uint8,address)):(address)",
      [ethereum.Value.fromTuple(config)]
    );

    return result[0].toAddress();
  }

  try_createControlledToken(
    config: ControlledTokenBuilder__createControlledTokenInputConfigStruct
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createControlledToken",
      "createControlledToken((string,string,uint8,address)):(address)",
      [ethereum.Value.fromTuple(config)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createTicket(
    config: ControlledTokenBuilder__createTicketInputConfigStruct
  ): Address {
    let result = super.call(
      "createTicket",
      "createTicket((string,string,uint8,address)):(address)",
      [ethereum.Value.fromTuple(config)]
    );

    return result[0].toAddress();
  }

  try_createTicket(
    config: ControlledTokenBuilder__createTicketInputConfigStruct
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createTicket",
      "createTicket((string,string,uint8,address)):(address)",
      [ethereum.Value.fromTuple(config)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ticketProxyFactory(): Address {
    let result = super.call(
      "ticketProxyFactory",
      "ticketProxyFactory():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_ticketProxyFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ticketProxyFactory",
      "ticketProxyFactory():(address)",
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

  get _trustedForwarder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _controlledTokenProxyFactory(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _ticketProxyFactory(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateControlledTokenCall extends ethereum.Call {
  get inputs(): CreateControlledTokenCall__Inputs {
    return new CreateControlledTokenCall__Inputs(this);
  }

  get outputs(): CreateControlledTokenCall__Outputs {
    return new CreateControlledTokenCall__Outputs(this);
  }
}

export class CreateControlledTokenCall__Inputs {
  _call: CreateControlledTokenCall;

  constructor(call: CreateControlledTokenCall) {
    this._call = call;
  }

  get config(): CreateControlledTokenCallConfigStruct {
    return this._call.inputValues[0].value.toTuple() as CreateControlledTokenCallConfigStruct;
  }
}

export class CreateControlledTokenCall__Outputs {
  _call: CreateControlledTokenCall;

  constructor(call: CreateControlledTokenCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateControlledTokenCallConfigStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get decimals(): i32 {
    return this[2].toI32();
  }

  get controller(): Address {
    return this[3].toAddress();
  }
}

export class CreateTicketCall extends ethereum.Call {
  get inputs(): CreateTicketCall__Inputs {
    return new CreateTicketCall__Inputs(this);
  }

  get outputs(): CreateTicketCall__Outputs {
    return new CreateTicketCall__Outputs(this);
  }
}

export class CreateTicketCall__Inputs {
  _call: CreateTicketCall;

  constructor(call: CreateTicketCall) {
    this._call = call;
  }

  get config(): CreateTicketCallConfigStruct {
    return this._call.inputValues[0].value.toTuple() as CreateTicketCallConfigStruct;
  }
}

export class CreateTicketCall__Outputs {
  _call: CreateTicketCall;

  constructor(call: CreateTicketCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateTicketCallConfigStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get decimals(): i32 {
    return this[2].toI32();
  }

  get controller(): Address {
    return this[3].toAddress();
  }
}