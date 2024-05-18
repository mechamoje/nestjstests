import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamMemberBody {
    @IsNotEmpty()
    @Length(5, 100)
    name: string;

    @IsNotEmpty({
        message: "the member name shouldn't be empty",
    })

    function: string;
}
