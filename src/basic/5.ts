enum DayOfWeek {
  Monday ='MONDAY',
  Tuesday ='TUESDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'THURSDAY',
  Friday ='FRIDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY'
}


const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}
console.log(isWeekend(DayOfWeek.Sunday)); 
console.log(isWeekend(DayOfWeek.Wednesday)); 
