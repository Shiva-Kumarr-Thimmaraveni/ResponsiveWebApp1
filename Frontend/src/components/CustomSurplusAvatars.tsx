import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile1.png'
import profile3 from '../assets/profile2.png'
import profile4 from '../assets/profile3.png'
import profile5 from '../assets/profile4.png'
import profile6 from '../assets/profile5.png'
import Tooltip from '@mui/material/Tooltip'


export default function CustomSurplusAvatars() {
  return (
    <AvatarGroup
    sx={{ padding: '0px', width: 'fit-content'}}
      spacing={18}
      renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
      total={200}
    >
      <Tooltip title="Remy Sharp">
        <Avatar alt="Remy Sharp" src={profile5} />
      </Tooltip>
      <Tooltip title="Travis Howard">
        <Avatar alt="Travis Howard" src={profile1} />
      </Tooltip>
      <Tooltip title="Agnes Walker">
        <Avatar alt="Agnes Walker" src={profile3} />
      </Tooltip>
      <Tooltip title="Trevor Henderson">
        <Avatar alt="Trevor Henderson" src={profile4} />
      </Tooltip>
    </AvatarGroup>
  )
}
