import { useCallback, useState } from 'react';
import ScriptTile, { PillButton } from './ScriptTile';
import { invoke } from '../utils/bridge';

const Item = (props) => {
  const { data } = props;

  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);

  const listener = useCallback((data) => {
    if (data.name === props.data.name) {
      setLoading(false);
      setUpdated(true);
    }
  }, [props.data.name]);

  const update = useCallback(() => {
    const ua = navigator.userAgent;
    if (/Safari/.test(ua)) {
      location.href = `scriptable:///run/Scriptore?url=${encodeURIComponent(data.files[0])}`;
    } else {
      setLoading(true);
      invoke('updateScript', data, listener);
    }
  }, [data, listener]);

  const open = useCallback(() => {
    const { name, type } = data;
    location.href = type === 'module'
      ? `scriptable:///open/${encodeURIComponent(`${name}.module`)}`
      : `scriptable:///run/${encodeURIComponent(name)}`;
  }, [data]);

  const onClick = useCallback(() => {
    if (updated) {
      open();
    } else {
      update();
    }
  }, [open, update, updated]);

  return (
    <ScriptTile
      data={data}
      secondary={`新版本 v${data.version || '0.0.0'}`}
      action={
        <PillButton loading={loading} onClick={onClick}>
          {updated ? '打开' : '更新'}
        </PillButton>
      }
    />
  )
}

export default Item;
