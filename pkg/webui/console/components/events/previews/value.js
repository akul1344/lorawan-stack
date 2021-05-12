// Copyright © 2021 The Things Network Foundation, The Things Industries B.V.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react'

import Message from '@ttn-lw/lib/components/message'

import PropTypes from '@ttn-lw/lib/prop-types'

import JSONPayload from './shared/json-payload'

import style from './previews.styl'

const Value = React.memo(({ event }) => {
  const { data } = event
  if (Array.isArray(data.value) || typeof data.value === 'object') {
    return <JSONPayload data={data.value} />
  }
  return <Message className={style.plainText} content={data.value} />
})

Value.propTypes = {
  event: PropTypes.event.isRequired,
}

export default Value
