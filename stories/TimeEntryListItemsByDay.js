import React from 'react';

import {Provider} from 'react-redux'
import configureStore from '../src/configureStore'

import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Table, TableBody} from 'material-ui/Table'
import TimeEntryListItemsByDay from '../src/components/TimeEntryListItemsByDay';

const props = {
  date: 'Mon, 6 Feb',
  entries: [
    {
      "key": "KbxshEl9QNUZP15DU0h",
      startTime: "2017-02-02T08:13:37.638Z",
      endTime: "2017-02-02T08:13:01.618Z",
      text: "track log 1 track log 1 track log 1 track log 1"
    },
    {
      "key": "KbxxMXkuLAQcwpM5AD3",
      startTime: "2017-01-02T08:33:59.439Z",
      endTime: "2017-01-02T08:13:47.202Z",
      text: "track log 2 track log 2 track log 2 track log 2 "
    }
  ]
}

storiesOf('<TimeEntryListItemsByDay />', module)
  .add('render', () => {
    const store = configureStore()
    return (
      <Provider store={store}>
        <TimeEntryListItemsByDay {...props} />
      </Provider>
    )
  })
  .add('render multiple', () => {
    const store = configureStore()
    return (
      <Provider store={store}>
        <div>
          <TimeEntryListItemsByDay {...props} />
          <TimeEntryListItemsByDay {...props} />
        </div>
      </Provider>
    )
  })