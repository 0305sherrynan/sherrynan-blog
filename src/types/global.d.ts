declare namespace Daily{
    interface Daily_all {
        description:string,
        submittime:string,
        user_id:string
    }
    type Daily_Exclude_id = Pick<Daily_all,'description' | 'submittime'> 
}

