export const formatDate = (date)=>{
    let newDate = new Date(date);
    return newDate.toLocaleString("default", {
        month: "long",
    }).substring(0,3) + " " +
    newDate.getUTCDate();
}