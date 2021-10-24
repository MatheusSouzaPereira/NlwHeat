import { Request, Response } from "express";
import { GetLastMessagesService } from "../services/GetLastMessagesService";

class GetLastMessagesController {
  async handle(request: Request, response: Response) {
      const services = new GetLastMessagesService();
      
      const result = await services.execute();

      return response.json(result);
  }
}

export { GetLastMessagesController };
