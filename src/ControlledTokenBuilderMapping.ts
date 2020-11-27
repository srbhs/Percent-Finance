import {
  CreatedControlledToken as CreatedControlledTokenEvent,
  CreatedTicket as CreatedTicketEvent
} from "../generated/ControlledTokenBuilder/ControlledTokenBuilder"
import {
  CreateControlledTokenCall,
  CreateTicketCall
} from "../generated/ControlledTokenBuilder/ControlledTokenBuilder"
import {
  ControlledTokenBuilderCreatedControlledTokenEvent as ControlledTokenBuilderCreatedControlledTokenEventSchema,
  ControlledTokenBuilderCreatedTicketEvent as ControlledTokenBuilderCreatedTicketEventSchema
} from "../generated/schema"
import {
  ControlledTokenBuildercreateControlledTokenCall as ControlledTokenBuildercreateControlledTokenCallSchema,
  ControlledTokenBuildercreateTicketCall as ControlledTokenBuildercreateTicketCallSchema
} from "../generated/schema"

export function handleCreatedControlledTokenEvent(
  event: CreatedControlledTokenEvent
): void {
  let entity = new ControlledTokenBuilderCreatedControlledTokenEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.token = event.params.token
  entity.save()
}

export function handleCreatedTicketEvent(event: CreatedTicketEvent): void {
  let entity = new ControlledTokenBuilderCreatedTicketEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.token = event.params.token
  entity.save()
}

export function handlecreateControlledTokenCall(
  call: CreateControlledTokenCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ControlledTokenBuildercreateControlledTokenCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.config_name = call.inputs.config.name
  entity.config_symbol = call.inputs.config.symbol
  entity.config_decimals = call.inputs.config.decimals
  entity.config_controller = call.inputs.config.controller
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handlecreateTicketCall(call: CreateTicketCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ControlledTokenBuildercreateTicketCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.config_name = call.inputs.config.name
  entity.config_symbol = call.inputs.config.symbol
  entity.config_decimals = call.inputs.config.decimals
  entity.config_controller = call.inputs.config.controller
  entity.value0 = call.outputs.value0
  entity.save()
}
