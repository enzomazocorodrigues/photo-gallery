import { Switch } from "@headlessui/react";

type ToggleProps = {
  disabled?: boolean
  value: boolean,
  toggleValue: () => void
}

const Toogle: React.FC<ToggleProps> = ({ disabled, value, toggleValue }) => {
  return (
    <Switch
      disabled={disabled}
      checked={value}
      onChange={toggleValue}
      className={`${value ? `bg-gradient-to-br from-purple-500 to-pink-500` : 'bg-gray-200'
        } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${value ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
      />
    </Switch>
  )

};

export default Toogle;
