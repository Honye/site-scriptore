import { useEffect, useState } from 'react'
import ScriptTile, { PillButton } from './ScriptTile';
import { invoke } from '../utils/bridge'

const Item = (props) => {
  const { data } = props;

  const [installed, setInstalled] = useState(props.installed);
  const [loading, setLoading] = useState(false);

  useEffect(() => setInstalled(props.installed), [props.installed])

  const listener = (data) => {
    if (data.name === props.data.name) {
      setInstalled(true);
      setLoading(false)
    }
  };

  const install = () => {
    const ua = navigator.userAgent;
    if (/Safari/.test(ua)) {
      location.href = `scriptable:///run/Scriptore?url=${encodeURIComponent(data.files[0])}`;
    } else {
      setLoading(true);
      invoke('install', data, listener);
    }
  };

  const open = () => {
    const { type, name } = data;
    location.href = type === 'module'
      ? `scriptable:///open/${encodeURIComponent(`${name}.module`)}`
      : `scriptable:///run/${encodeURIComponent(name)}`;
  };

  const onClick = () => {
    if (installed) {
      open();
    } else {
      install();
    }
  };

  return (
    <ScriptTile
      data={data}
      muted={props.muted}
      action={
        <PillButton loading={loading} onClick={onClick}>
          {installed ? '打开' : '获取'}
        </PillButton>
      }
    />
  )
}

export default Item;
