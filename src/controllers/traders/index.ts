import type { TradersService } from "../../services/traders";
import { create } from "./trader.create.controller";
import { deleter } from "./trader.delete.controller";
import { get } from "./trader.get.controller";
import { getById } from "./trader.getById.controller";
import { update } from "./trader.update.controller";


export const TraderController = (tradersService: TradersService) => ({
  getTradersController: get(tradersService),
  getTraderByIdController: getById(tradersService),
  createTraderController: create(tradersService),
  updateTraderController: update(tradersService),
  deleteTraderController: deleter(tradersService)
});
