import {
  OwnershipTransferred as OwnershipTransferredEvent,
  ReserveRateMantissaSet as ReserveRateMantissaSetEvent
} from "../generated/Reserve/Reserve"
import {
  RenounceOwnershipCall,
  SetRateMantissaCall,
  TransferOwnershipCall,
  WithdrawReserveCall
} from "../generated/Reserve/Reserve"
import {
  ReserveOwnershipTransferredEvent as ReserveOwnershipTransferredEventSchema,
  ReserveReserveRateMantissaSetEvent as ReserveReserveRateMantissaSetEventSchema
} from "../generated/schema"
import {
  ReserverenounceOwnershipCall as ReserverenounceOwnershipCallSchema,
  ReservesetRateMantissaCall as ReservesetRateMantissaCallSchema,
  ReservetransferOwnershipCall as ReservetransferOwnershipCallSchema,
  ReservewithdrawReserveCall as ReservewithdrawReserveCallSchema
} from "../generated/schema"

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new ReserveOwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleReserveRateMantissaSetEvent(
  event: ReserveRateMantissaSetEvent
): void {
  let entity = new ReserveReserveRateMantissaSetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.rateMantissa = event.params.rateMantissa
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ReserverenounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetRateMantissaCall(call: SetRateMantissaCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ReservesetRateMantissaCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ReservetransferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handlewithdrawReserveCall(call: WithdrawReserveCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ReservewithdrawReserveCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.prizePool = call.inputs.prizePool
  entity.to = call.inputs.to
  entity.value0 = call.outputs.value0
  entity.save()
}
