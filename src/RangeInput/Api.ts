export interface IResponseObject {
    startDate: string;
    startDateVal: number;
    endDate: string;
    endDateVal: number;
    text: string;
}

export const callApi = async (input: string) => {
    const response = await processAndTranslate(input);
    return response;
};

function parseRangeDates(str: string) {
    const [ strStart, strEnd ] = str.split('-');
    let startArr = strStart.trim().split(" ");
    const endArr = strEnd.trim().split(" ");
    
    if (startArr.length < 3) {
        if (startArr.length === 1) {
            startArr = startArr.concat(endArr.slice(1));
        }

        if (startArr.length === 2) {
            startArr = startArr.concat(endArr.slice(2))
        }
    } 

    const end = new Date(strEnd);
    const start = new Date(startArr.join(" "));   
    
    return [ start, end ];    
}

function processAndTranslate(str: string) {
    const [ start, end ] = parseRangeDates(str);
    
    const response: IResponseObject = {
        startDate: start.toISOString(),
        startDateVal: start.valueOf(),
        endDate: end.toISOString(),   
        endDateVal: end.valueOf(),
        text: str
    };
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(response);
        }, 250);
    });
} 

