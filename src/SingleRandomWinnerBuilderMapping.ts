import { SingleRandomWinnerCreated as SingleRandomWinnerCreatedEvent } from "../generated/SingleRandomWinnerBuilder/SingleRandomWinnerBuilder"
import { CreateSingleRandomWinnerCall } from "../generated/SingleRandomWinnerBuilder/SingleRandomWinnerBuilder"
import { SingleRandomWinnerBuilderSingleRandomWinnerCreatedEvent as SingleRandomWinnerBuilderSingleRandomWinnerCreatedEventSchema } from "../generated/schema"
import { SingleRandomWinnerBuildercreateSingleRandomWinnerCall as SingleRandomWinnerBuildercreateSingleRandomWinnerCallSchema } from "../generated/schema"

export function handleSingleRandomWinnerCreatedEvent(
  event: SingleRandomWinnerCreatedEvent
): void {
  let entity = new SingleRandomWinnerBuilderSingleRandomWinnerCreatedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.singleRandomWinner = event.params.singleRandomWinner
  entity.ticket = event.params.ticket
  entity.sponsorship = event.params.sponsorship
  entity.save()
}

export function handlecreateSingleRandomWinnerCall(
  call: CreateSingleRandomWinnerCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new SingleRandomWinnerBuildercreateSingleRandomWinnerCallSchema(
    id
  )
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.prizePool = call.inputs.prizePool
  entity.config_rngService = call.inputs.config.rngService
  entity.config_prizePeriodStart = call.inputs.config.prizePeriodStart
  entity.config_prizePeriodSeconds = call.inputs.config.prizePeriodSeconds
  entity.config_ticketName = call.inputs.config.ticketName
  entity.config_ticketSymbol = call.inputs.config.ticketSymbol
  entity.config_sponsorshipName = call.inputs.config.sponsorshipName
  entity.config_sponsorshipSymbol = call.inputs.config.sponsorshipSymbol
  entity.config_ticketCreditLimitMantissa =
    call.inputs.config.ticketCreditLimitMantissa
  entity.config_ticketCreditRateMantissa =
    call.inputs.config.ticketCreditRateMantissa
  entity.config_externalERC20Awards = call.inputs.config.externalERC20Awards
  entity.decimals = call.inputs.decimals
  entity.owner = call.inputs.owner
  entity.value0 = call.outputs.value0
  entity.save()
}
