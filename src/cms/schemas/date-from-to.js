export default {
  name: 'dateSpan',
  title: 'Date Span',
  type: 'document',
  fields: [
    {
      name: 'from',
      title: 'From',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'to',
      title: 'To',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
  ]
}
