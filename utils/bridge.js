/**
 * @param {string} name
 * @param {any} data
 * @param {(e: any) => void} callback
 */
export const invoke = (name, data, callback) => {
  if (typeof completion === 'undefined') return

  const detail = { code: name, data }

  const eventName = `ScriptableBridge_${name}_Result`
  const controller = new AbortController()
  window.addEventListener(
    eventName,
    (e) => {
      callback && callback(e.detail)
      controller.abort()
    },
    { signal: controller.signal }
  )

  if (window.__scriptable_bridge_queue) {
    window.__scriptable_bridge_queue.push(detail)
  } else {
    completion(detail)
    window.__scriptable_bridge_queue = []
  }
}

export const runsInSafari = () => {
  const ua = navigator.userAgent;
  return /Safari/.test(ua);
};
