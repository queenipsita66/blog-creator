export const getFormattedDate = (date: string) => {
    let day = new Date(date).getDate();
    let month = new Date(date).getMonth();
    const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (monthList[month] + " " + day);

}