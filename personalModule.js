function userGreeting (userName) {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()

  if (currentHour >= 5 && currentHour <= 11) return `Good morning, ${userName}`
  if (currentHour > 11 && currentHour <= 14) return `Good day, ${userName}`
  if (currentHour > 14 && currentHour <= 17) return `Good afternoon, ${userName}`
  if (currentHour > 17 && currentHour < 23) return `Good evening, ${userName}`
  if (currentHour > 23 || currentHour < 5) return `Good night, ${userName}`
}

module.exports = { userGreeting }
