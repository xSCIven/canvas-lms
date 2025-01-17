/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import ViewOptionsTabPanel from './ViewOptionsTabPanel'

export default {
  title: 'Examples/Evaluate/Gradebook/ViewOptionsTabPanel',
  component: ViewOptionsTabPanel,
  args: {
    columnSort: {
      currentValue: {
        criterion: 'name',
        direction: 'ascending'
      },
      modulesEnabled: true,
      onChange: () => {}
    },
    hideAssignmentGroupTotals: {
      checked: false,
      onChange: () => {}
    },
    showNotes: {
      checked: true,
      onChange: () => {}
    },
    showUnpublishedAssignments: {
      checked: true,
      onChange: () => {}
    },
    statusColors: {
      currentValues: {
        dropped: '#FEF0E5',
        excused: '#E5F7E5',
        late: '#F3EFEA',
        missing: '#FEF7E5',
        resubmitted: '#E5F7F6'
      },
      onChange: () => {}
    },
    viewUngradedAsZero: {
      allowed: true,
      checked: true,
      onChange: () => {}
    },
    showSeparateFirstLastNames: {
      allowed: true,
      checked: false,
      onChange: () => {}
    }
  }
}

const Template = args => <ViewOptionsTabPanel {...args} />

export const Default = Template.bind({})
