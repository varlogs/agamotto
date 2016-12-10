### Api Contract

1. Get the unique list of sources 

   This should aggregate the list of sources from may be the past one week indices. Logstasher takes into account the past one month index. This will power the sources dropdown on the search toolbar

2. Search API

- The default filter could be the `Last 30s` and show all the log events since then. UI will pass fully qualified timestamp of the form `2016-12-10T10:07:23.339` as `from` filter 
- Provide datetime range filter that takes `from` and `to` values. Both would be fully qualified timestamp values of the form `2016-12-10T10:07:23.339` passed as UTC. `to` unless specified is now. 
- Ability to filter by a specific `trace_id`
- Ability to filter by log level be it `ERROR` or `WARN`
- Ability to filter by custom keywords. Keywords by default should support AND operator. OR as alternate operator if supported is nice to have. This will search for all keywords within a single event's `message` field
- Ability to search for keywords within a single request. For all log events with the same `trace_id`, check if `John Doe` and `registered successfully` are present distributed across same or multiple events' `message` field 

3. Metrics (all with ability to time slice. Current month might be default)

- Show the top 5 slowest requests
- Show the requests with errors
- Source dependency graph. Given an app like QuoteTrackerApi, show a graph of all the other apps that it is dependent on

