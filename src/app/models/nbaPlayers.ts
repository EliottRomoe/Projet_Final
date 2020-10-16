export class nbaPlayers {
    player_name : { type : String, required : true };
    team_abbreviation : { type : String };
    age : { type : Number };
    player_height : { type : Number };
    player_weight : { type : Number };
    college : { type : String };
    country : { type : String };
    draft_year : { type : Number };
    draft_number : { type : Number };
    pts : { type : Number };
    reb : { type : Number };
    ast : { type : Number };
    net_rating : { type : Number }
}