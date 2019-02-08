exports.getDuration = (param) => {
    try {
        if (param.toLowerCase() === 'ytd') {
            var dateOne = new Date(new Date().getFullYear(), 0, 1);
            dateOne.setDate(dateOne.getDate() + 1);
            var dateStringOne = dateOne.toISOString().split('T')[0];
            var dateTwo = new Date();
            dateTwo.setDate(dateTwo.getDate() - 1);
            var dateStringTwo = dateTwo.toISOString().split('T')[0];
            return dateStringOne + "-" + dateStringTwo;
        } else if (param.toLowerCase() === 'mtd') {
            var dateOne = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
            dateOne.setDate(dateOne.getDate() + 1);
            var dateStringOne = dateOne.toISOString().split('T')[0];
            var dateTwo = new Date();
            dateTwo.setDate(dateTwo.getDate() - 1);
            var dateStringTwo = dateTwo.toISOString().split('T')[0];
            console.log(dateStringOne + "-" + dateStringTwo);
        } else if (param.toLowerCase() === 'wtd') {
            console.log("wtd")
            var dateOne = new Date();
            var day = dateOne.getDay();
            if (day == 0) {
                dateOne.setDate(dateOne.getDate() - 6);
                var dateStringOne = dateOne.toISOString().split('T')[0];
            } else {
                dateOne.setDate(dateOne.getDate() - (day - 1));
                var dateStringOne = dateOne.toISOString().split('T')[0];
            }
            var dateTwo = new Date();
            dateTwo.setDate(dateTwo.getDate() - 1);
            var dateStringTwo = dateTwo.toISOString().split('T')[0];
            return dateStringOne + "-" + dateStringTwo;
        } else {
            return "Parameters not matched";
        }
    } catch (err) {
        return err;
    }
}