import { Router } from "express";
import { AuthenticateUserController } from "./Conttrollers/AuthenticateUserController";
import { CreateMessageController } from "./Conttrollers/CreateMessageController";
import { GetLastMessagesController } from "./Conttrollers/GetLastMessagesController";
import { ProfileUserController } from "./Conttrollers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";


const router = Router();
//Por está sendo passado como middleware não é preciso adicionar o request e o responde 
router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last", new GetLastMessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);


export { router };