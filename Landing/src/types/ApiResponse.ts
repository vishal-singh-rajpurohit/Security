import { messsageInterface } from "@/model/user.model";
export interface ApiResponse{
    success: boolean;
    message: string;
    isAccptingMessages?: boolean;
    messages?: Array<messsageInterface>;
}