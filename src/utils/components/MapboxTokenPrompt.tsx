/*
 * Copyright 2024 Nathan P. Bombana
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {FC, ReactElement, useState} from 'react';

export type MapboxTokenPromptProps = {
  children: (token: string) => ReactElement
}

export const MapboxTokenPrompt: FC<MapboxTokenPromptProps> = ({ children }) => {
  const [token, setToken] = useState('')

  return (
    <>
      <div style={{ margin: '2em' }}>
        <label htmlFor="mapbox-access-token">Mapbox access token:</label>
        <br/>
        <input
          id="mapbox-access-token"
          value={token}
          // Bundler issues, I will not worry about this for now
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          onChange={e => setToken(e.target.value)}
          placeholder="Paste your mapbox access token here"
          style={{ width: '50%' }}
        />
      </div>
      {children(token)}
    </>
  )
}
