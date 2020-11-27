import {
  BalanceDripActivated as BalanceDripActivatedEvent,
  BalanceDripDeactivated as BalanceDripDeactivatedEvent,
  BalanceDripDripped as BalanceDripDrippedEvent,
  BalanceDripRateSet as BalanceDripRateSetEvent,
  DripTokenClaimed as DripTokenClaimedEvent,
  DripTokenDripped as DripTokenDrippedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  TransferredOut as TransferredOutEvent,
  VolumeDripActivated as VolumeDripActivatedEvent,
  VolumeDripDeactivated as VolumeDripDeactivatedEvent,
  VolumeDripDripped as VolumeDripDrippedEvent,
  VolumeDripPeriodEnded as VolumeDripPeriodEndedEvent,
  VolumeDripPeriodStarted as VolumeDripPeriodStartedEvent,
  VolumeDripSet as VolumeDripSetEvent
} from "../generated/Comptroller/Comptroller"
import {
  ActivateBalanceDripCall,
  ActivateVolumeDripCall,
  BeforeTokenMintCall,
  BeforeTokenTransferCall,
  CaptureClaimsForBalanceDripsForPairsCall,
  ClaimDripCall,
  ClaimDripsCall,
  DeactivateBalanceDripCall,
  DeactivateVolumeDripCall,
  MintAndCaptureVolumeDripsForPairsCall,
  RenounceOwnershipCall,
  SetBalanceDripRateCall,
  SetVolumeDripCall,
  TransferOutCall,
  TransferOwnershipCall,
  UpdateActiveBalanceDripsForPairsCall,
  UpdateActiveVolumeDripsForPairsCall,
  UpdateAndClaimDripsCall,
  UpdateDripsCall
} from "../generated/Comptroller/Comptroller"
import {
  ComptrollerBalanceDripActivatedEvent as ComptrollerBalanceDripActivatedEventSchema,
  ComptrollerBalanceDripDeactivatedEvent as ComptrollerBalanceDripDeactivatedEventSchema,
  ComptrollerBalanceDripDrippedEvent as ComptrollerBalanceDripDrippedEventSchema,
  ComptrollerBalanceDripRateSetEvent as ComptrollerBalanceDripRateSetEventSchema,
  ComptrollerDripTokenClaimedEvent as ComptrollerDripTokenClaimedEventSchema,
  ComptrollerDripTokenDrippedEvent as ComptrollerDripTokenDrippedEventSchema,
  ComptrollerOwnershipTransferredEvent as ComptrollerOwnershipTransferredEventSchema,
  ComptrollerTransferredOutEvent as ComptrollerTransferredOutEventSchema,
  ComptrollerVolumeDripActivatedEvent as ComptrollerVolumeDripActivatedEventSchema,
  ComptrollerVolumeDripDeactivatedEvent as ComptrollerVolumeDripDeactivatedEventSchema,
  ComptrollerVolumeDripDrippedEvent as ComptrollerVolumeDripDrippedEventSchema,
  ComptrollerVolumeDripPeriodEndedEvent as ComptrollerVolumeDripPeriodEndedEventSchema,
  ComptrollerVolumeDripPeriodStartedEvent as ComptrollerVolumeDripPeriodStartedEventSchema,
  ComptrollerVolumeDripSetEvent as ComptrollerVolumeDripSetEventSchema
} from "../generated/schema"
import {
  ComptrolleractivateBalanceDripCall as ComptrolleractivateBalanceDripCallSchema,
  ComptrolleractivateVolumeDripCall as ComptrolleractivateVolumeDripCallSchema,
  ComptrollerbeforeTokenMintCall as ComptrollerbeforeTokenMintCallSchema,
  ComptrollerbeforeTokenTransferCall as ComptrollerbeforeTokenTransferCallSchema,
  ComptrollercaptureClaimsForBalanceDripsForPairsCall as ComptrollercaptureClaimsForBalanceDripsForPairsCallSchema,
  ComptrollerclaimDripCall as ComptrollerclaimDripCallSchema,
  ComptrollerclaimDripsCall as ComptrollerclaimDripsCallSchema,
  ComptrollerdeactivateBalanceDripCall as ComptrollerdeactivateBalanceDripCallSchema,
  ComptrollerdeactivateVolumeDripCall as ComptrollerdeactivateVolumeDripCallSchema,
  ComptrollermintAndCaptureVolumeDripsForPairsCall as ComptrollermintAndCaptureVolumeDripsForPairsCallSchema,
  ComptrollerrenounceOwnershipCall as ComptrollerrenounceOwnershipCallSchema,
  ComptrollersetBalanceDripRateCall as ComptrollersetBalanceDripRateCallSchema,
  ComptrollersetVolumeDripCall as ComptrollersetVolumeDripCallSchema,
  ComptrollertransferOutCall as ComptrollertransferOutCallSchema,
  ComptrollertransferOwnershipCall as ComptrollertransferOwnershipCallSchema,
  ComptrollerupdateActiveBalanceDripsForPairsCall as ComptrollerupdateActiveBalanceDripsForPairsCallSchema,
  ComptrollerupdateActiveVolumeDripsForPairsCall as ComptrollerupdateActiveVolumeDripsForPairsCallSchema,
  ComptrollerupdateAndClaimDripsCall as ComptrollerupdateAndClaimDripsCallSchema,
  ComptrollerupdateDripsCall as ComptrollerupdateDripsCallSchema
} from "../generated/schema"

export function handleBalanceDripActivatedEvent(
  event: BalanceDripActivatedEvent
): void {
  let entity = new ComptrollerBalanceDripActivatedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.dripRatePerSecond = event.params.dripRatePerSecond
  entity.save()
}

export function handleBalanceDripDeactivatedEvent(
  event: BalanceDripDeactivatedEvent
): void {
  let entity = new ComptrollerBalanceDripDeactivatedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.save()
}

export function handleBalanceDripDrippedEvent(
  event: BalanceDripDrippedEvent
): void {
  let entity = new ComptrollerBalanceDripDrippedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}

export function handleBalanceDripRateSetEvent(
  event: BalanceDripRateSetEvent
): void {
  let entity = new ComptrollerBalanceDripRateSetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.dripRatePerSecond = event.params.dripRatePerSecond
  entity.save()
}

export function handleDripTokenClaimedEvent(
  event: DripTokenClaimedEvent
): void {
  let entity = new ComptrollerDripTokenClaimedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.operator = event.params.operator
  entity.dripToken = event.params.dripToken
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}

export function handleDripTokenDrippedEvent(
  event: DripTokenDrippedEvent
): void {
  let entity = new ComptrollerDripTokenDrippedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.dripToken = event.params.dripToken
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}

export function handleOwnershipTransferredEvent(
  event: OwnershipTransferredEvent
): void {
  let entity = new ComptrollerOwnershipTransferredEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleTransferredOutEvent(event: TransferredOutEvent): void {
  let entity = new ComptrollerTransferredOutEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.token = event.params.token
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}

export function handleVolumeDripActivatedEvent(
  event: VolumeDripActivatedEvent
): void {
  let entity = new ComptrollerVolumeDripActivatedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.periodSeconds = event.params.periodSeconds
  entity.dripAmount = event.params.dripAmount
  entity.save()
}

export function handleVolumeDripDeactivatedEvent(
  event: VolumeDripDeactivatedEvent
): void {
  let entity = new ComptrollerVolumeDripDeactivatedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.save()
}

export function handleVolumeDripDrippedEvent(
  event: VolumeDripDrippedEvent
): void {
  let entity = new ComptrollerVolumeDripDrippedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}

export function handleVolumeDripPeriodEndedEvent(
  event: VolumeDripPeriodEndedEvent
): void {
  let entity = new ComptrollerVolumeDripPeriodEndedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.period = event.params.period
  entity.totalSupply = event.params.totalSupply
  entity.drippedTokens = event.params.drippedTokens
  entity.save()
}

export function handleVolumeDripPeriodStartedEvent(
  event: VolumeDripPeriodStartedEvent
): void {
  let entity = new ComptrollerVolumeDripPeriodStartedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.period = event.params.period
  entity.dripAmount = event.params.dripAmount
  entity.endTime = event.params.endTime
  entity.save()
}

export function handleVolumeDripSetEvent(event: VolumeDripSetEvent): void {
  let entity = new ComptrollerVolumeDripSetEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.source = event.params.source
  entity.measure = event.params.measure
  entity.dripToken = event.params.dripToken
  entity.isReferral = event.params.isReferral
  entity.periodSeconds = event.params.periodSeconds
  entity.dripAmount = event.params.dripAmount
  entity.save()
}

export function handleactivateBalanceDripCall(
  call: ActivateBalanceDripCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrolleractivateBalanceDripCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.dripRatePerSecond = call.inputs.dripRatePerSecond
  entity.save()
}

export function handleactivateVolumeDripCall(
  call: ActivateVolumeDripCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrolleractivateVolumeDripCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.isReferral = call.inputs.isReferral
  entity.periodSeconds = call.inputs.periodSeconds
  entity.dripAmount = call.inputs.dripAmount
  entity.endTime = call.inputs.endTime
  entity.save()
}

export function handlebeforeTokenMintCall(call: BeforeTokenMintCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerbeforeTokenMintCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.to = call.inputs.to
  entity.amount = call.inputs.amount
  entity.measure = call.inputs.measure
  entity.referrer = call.inputs.referrer
  entity.save()
}

export function handlebeforeTokenTransferCall(
  call: BeforeTokenTransferCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerbeforeTokenTransferCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.from = call.inputs.from
  entity.to = call.inputs.to
  entity.value2 = call.inputs.value2
  entity.measure = call.inputs.measure
  entity.save()
}

export function handlecaptureClaimsForBalanceDripsForPairsCall(
  call: CaptureClaimsForBalanceDripsForPairsCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollercaptureClaimsForBalanceDripsForPairsCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.user = call.inputs.user
  entity.dripTokens = call.inputs.dripTokens
  entity.save()
}

export function handleclaimDripCall(call: ClaimDripCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerclaimDripCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.user = call.inputs.user
  entity.dripToken = call.inputs.dripToken
  entity.amount = call.inputs.amount
  entity.save()
}

export function handleclaimDripsCall(call: ClaimDripsCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerclaimDripsCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.user = call.inputs.user
  entity.dripTokens = call.inputs.dripTokens
  entity.save()
}

export function handledeactivateBalanceDripCall(
  call: DeactivateBalanceDripCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerdeactivateBalanceDripCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.prevDripToken = call.inputs.prevDripToken
  entity.save()
}

export function handledeactivateVolumeDripCall(
  call: DeactivateVolumeDripCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerdeactivateVolumeDripCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.isReferral = call.inputs.isReferral
  entity.prevDripToken = call.inputs.prevDripToken
  entity.save()
}

export function handlemintAndCaptureVolumeDripsForPairsCall(
  call: MintAndCaptureVolumeDripsForPairsCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollermintAndCaptureVolumeDripsForPairsCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.user = call.inputs.user
  entity.amount = call.inputs.amount
  entity.dripTokens = call.inputs.dripTokens
  entity.save()
}

export function handlerenounceOwnershipCall(call: RenounceOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerrenounceOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handlesetBalanceDripRateCall(
  call: SetBalanceDripRateCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollersetBalanceDripRateCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.dripRatePerSecond = call.inputs.dripRatePerSecond
  entity.save()
}

export function handlesetVolumeDripCall(call: SetVolumeDripCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollersetVolumeDripCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.source = call.inputs.source
  entity.measure = call.inputs.measure
  entity.dripToken = call.inputs.dripToken
  entity.isReferral = call.inputs.isReferral
  entity.periodSeconds = call.inputs.periodSeconds
  entity.dripAmount = call.inputs.dripAmount
  entity.save()
}

export function handletransferOutCall(call: TransferOutCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollertransferOutCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.token = call.inputs.token
  entity.to = call.inputs.to
  entity.amount = call.inputs.amount
  entity.save()
}

export function handletransferOwnershipCall(call: TransferOwnershipCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollertransferOwnershipCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.newOwner = call.inputs.newOwner
  entity.save()
}

export function handleupdateActiveBalanceDripsForPairsCall(
  call: UpdateActiveBalanceDripsForPairsCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerupdateActiveBalanceDripsForPairsCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleupdateActiveVolumeDripsForPairsCall(
  call: UpdateActiveVolumeDripsForPairsCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerupdateActiveVolumeDripsForPairsCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.save()
}

export function handleupdateAndClaimDripsCall(
  call: UpdateAndClaimDripsCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerupdateAndClaimDripsCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.user = call.inputs.user
  entity.dripTokens = call.inputs.dripTokens
  entity.save()
}

export function handleupdateDripsCall(call: UpdateDripsCall): void {
  let id = call.transaction.hash.toHex()
  let entity = new ComptrollerupdateDripsCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.user = call.inputs.user
  entity.dripTokens = call.inputs.dripTokens
  entity.save()
}
