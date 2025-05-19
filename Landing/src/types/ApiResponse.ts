import { messsageInterface } from "@/model/user.model";
export interface ApiResponse{
    success: boolean;
    message: String;
    isAccptingMessages?: boolean;
    messages?: Array<messsageInterface>;
}