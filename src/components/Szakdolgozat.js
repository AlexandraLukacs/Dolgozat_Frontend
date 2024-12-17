import React from 'react'

export default function Szakdolgozat(props) {
  return (
        <tbody>
            <tr>
                <td>{props.szakdoga.szakdoga_name}</td>
                <td>{props.szakdoga.membersname}</td>
                <td>{props.szakdoga.githublink}</td>
                <td>{props.szakdoga.pagelink}</td>
                <td>✏️</td>
                <td>❌</td>
            </tr>
        </tbody>
  )
}
