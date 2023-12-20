const MessageText = {
  NO_ARGUMENT: 'Unable to determine the time of year!',
  INVALID_ARGUMENT_TYPE: 'Invalid date!'
};

const seasonsToMonthNumbers = {
  winter: [0, 1, 11],
  spring: [2, 3, 4],
  summer: [5, 6, 7],
  fall: [8, 9, 10]
};

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return MessageText.NO_ARGUMENT;
  }

  try {
    date.getUTCDate();  // deepFakeDate doesn't have this method

    const monthNumber = date.getMonth();

    for (let season in seasonsToMonthNumbers) {
      if (seasonsToMonthNumbers[season].includes(monthNumber)) {
        return season;
      }
    }
  }

  catch {
    throw new TypeError(MessageText.INVALID_ARGUMENT_TYPE);
  }
}

module.exports = {
  getSeason
};
