import { PrizePoolCreated as PrizePoolCreatedEvent } from "../generated/yVaultPrizePoolBuilder/yVaultPrizePoolBuilder"
import {
  CreateSingleRandomWinnerCall,
  CreateyVaultPrizePoolCall
} from "../generated/yVaultPrizePoolBuilder/yVaultPrizePoolBuilder"
import { yVaultPrizePoolBuilderPrizePoolCreatedEvent as yVaultPrizePoolBuilderPrizePoolCreatedEventSchema } from "../generated/schema"
import {
  yVaultPrizePoolBuildercreateSingleRandomWinnerCall as yVaultPrizePoolBuildercreateSingleRandomWinnerCallSchema,
  yVaultPrizePoolBuildercreateyVaultPrizePoolCall as yVaultPrizePoolBuildercreateyVaultPrizePoolCallSchema
} from "../generated/schema"

export function handlePrizePoolCreatedEvent(
  event: PrizePoolCreatedEvent
): void {
  let entity = new yVaultPrizePoolBuilderPrizePoolCreatedEventSchema(
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
  let entity = new yVaultPrizePoolBuildercreateSingleRandomWinnerCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.prizePoolConfig_vault = call.inputs.prizePoolConfig.vault
  entity.prizePoolConfig_reserveRateMantissa =
    call.inputs.prizePoolConfig.reserveRateMantissa
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

export function handlecreateyVaultPrizePoolCall(
  call: CreateyVaultPrizePoolCall
): void {
  let id = call.transaction.hash.toHex()
  let entity = new yVaultPrizePoolBuildercreateyVaultPrizePoolCallSchema(id)
  entity.fromAddress = call.transaction.from
  entity.toAddress = call.transaction.to
  entity.blockTimestamp = call.block.timestamp
  entity.config_vault = call.inputs.config.vault
  entity.config_reserveRateMantissa = call.inputs.config.reserveRateMantissa
  entity.config_maxExitFeeMantissa = call.inputs.config.maxExitFeeMantissa
  entity.config_maxTimelockDuration = call.inputs.config.maxTimelockDuration
  entity.value0 = call.outputs.value0
  entity.save()
}
