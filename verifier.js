function verifyPass(input) {
    let pass = 0;
    let msg = "Your password must contain:";

    if (input === null) {
        return "The password must not be null";
    } else {
        pass++;
    }

    const regEx = /\d/
    if (!regEx.test(input)) {
        msg += "\na number";
    } else {
        pass++;
    }

    if (input.length <= 8) {
        msg += "\nmore than 8 characters";
    } else {
        pass++;
    }

    if (input === input.toLowerCase()) {
        msg += "\nan uppercase letter";
    } else {
        pass++;
    }

    if (input === input.toUpperCase()) {
        msg += "\na lowercase letter";
    } else {
        pass++;
    }

    if (pass < 3) {
        return msg;
    } else {
        return true;
    }
}

export { verifyPass };