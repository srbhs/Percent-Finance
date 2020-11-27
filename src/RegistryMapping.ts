import {
  OwnershipTransferred as OwnershipTransferredEvent,
  Registered as RegisteredEvent
} from "../generated/Registry/Registry"
import {
  RegisterCall,
  RenounceOwnershipCall,
  TransferOwnershipCall
} from "../generated/Registry/Registry"
import {
  RegistryOwnershipTransferredEvent as RegistryOwnershipTransferredEventSchema,
  RegistryRegisteredEvent as RegistryRegisteredEventSchema
} from "../generated/schema"
import {
  RegistryregisterCall as RegistryregisterCallSchema,
  RegistryrenounceOwnershipCall as RegistryrenounceOwnershipCallSchema,
  RegistrytransferOwnershipCall as RegistrytransferOwnershipCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new RegistryOwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleRegisteredEvent(event: RegisteredEvent): void {
  let entity = new RegistryRegisteredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.pointer = event.params.pointer
  entity.save()
}

export function handleregisterCall(call: RegisterCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new RegistryregisterCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new RegistryrenounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new RegistrytransferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}
