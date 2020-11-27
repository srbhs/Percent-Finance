import { PrizePoolCreated as PrizePoolCreatedEvent } from "../generated/StakePrizePoolBuilder/StakePrizePoolBuilder"
import {
  CreateSingleRandomWinnerCall,
  CreateStakePrizePoolCall
} from "../generated/StakePrizePoolBuilder/StakePrizePoolBuilder"
import { StakePrizePoolBuilderPrizePoolCreatedEvent as StakePrizePoolBuilderPrizePoolCreatedEventSchema } from "../generated/schema"
import {
  StakePrizePoolBuildercreateSingleRandomWinnerCall as StakePrizePoolBuildercreateSingleRandomWinnerCallSchema,
  StakePrizePoolBuildercreateStakePrizePoolCall as StakePrizePoolBuildercreateStakePrizePoolCallSchema
} from "../generated/schema"

export function handlePrizePoolCreatedEvent(
  event: PrizePoolCreatedEvent
): void {
  let entity = new StakePrizePoolBuilderPrizePoolCreatedEventSchema(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromAddress = event.transaction.from
  entity.toAddress = event.transaction.to
  entity.blockTimestamp = event.block.timestamp
  entity.creator = event.params.creator
  entity.prizePool = event.params.prizePool
  entity.save()
}

export function handlecreateSingleRandomWinnerCall(
  call: CreateSingleRandomWinnerCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new StakePrizePoolBuildercreateSingleRandomWinnerCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.prizePoolConfig_token = call.inputs.prizePoolConfig.token
  entity.prizePoolConfig_maxExitFeeMantissa =
    call.inputs.prizePoolConfig.maxExitFeeMantissa
  entity.prizePoolConfig_maxTimelockDuration =
    call.inputs.prizePoolConfig.maxTimelockDuration
  entity.prizeStrategyConfig_rngService =
    call.inputs.prizeStrategyConfig.rngService
  entity.prizeStrategyConfig_prizePeriodStart =
    call.inputs.prizeStrategyConfig.prizePeriodStart
  entity.prizeStrategyConfig_prizePeriodSeconds =
    call.inputs.prizeStrategyConfig.prizePeriodSeconds
  entity.prizeStrategyConfig_ticketName =
    call.inputs.prizeStrategyConfig.ticketName
  entity.prizeStrategyConfig_ticketSymbol =
    call.inputs.prizeStrategyConfig.ticketSymbol
  entity.prizeStrategyConfig_sponsorshipName =
    call.inputs.prizeStrategyConfig.sponsorshipName
  entity.prizeStrategyConfig_sponsorshipSymbol =
    call.inputs.prizeStrategyConfig.sponsorshipSymbol
  entity.prizeStrategyConfig_ticketCreditLimitMantissa =
    call.inputs.prizeStrategyConfig.ticketCreditLimitMantissa
  entity.prizeStrategyConfig_ticketCreditRateMantissa =
    call.inputs.prizeStrategyConfig.ticketCreditRateMantissa
  entity.prizeStrategyConfig_externalERC20Awards =
    call.inputs.prizeStrategyConfig.externalERC20Awards
  entity.decimals = call.inputs.decimals
  entity.value0 = call.outputs.value0
  entity.save()
}

export function handlecreateStakePrizePoolCall(
  call: CreateStakePrizePoolCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new StakePrizePoolBuildercreateStakePrizePoolCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.config_token = call.inputs.config.token
  entity.config_maxExitFeeMantissa = call.inputs.config.maxExitFeeMantissa
  entity.config_maxTimelockDuration = call.inputs.config.maxTimelockDuration
  entity.value0 = call.outputs.value0
  entity.save()
}
