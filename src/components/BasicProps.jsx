import React, { useState } from 'react'

function Button({text, color, size, onClick, disabled=false}){

  const sizeClasses = 
  size === 'small' 
  ? 'px-2 py-1 text-sm' : 
  size === 'large' 
  ? 'px-6 py-3 text-2xl' 
  : 'px-3 py-2 text-md'

  const colorClasses = 
    color === 'primary' ? 'bg-amber-400 text-black' : 
    color === 'Secondary' ? 'bg-green-400 text-black' :
    color === 'danger' ? 'bg-red-400 text-black' : 
      'bg-white text-black'

  return <button
    className={`
      ${sizeClasses} ${colorClasses}
      ${disabled && 'opacity-50 cursor-not-allowed'}
      `
    }
    disabled={disabled}
    onClick={onClick}
  >{text}</button>
}


const BasicProps = () => {
  const [counter, setCounter] = useState(0);

  return (
    <section className="mx-auto max-w-5xl rounded-xl bg-slate-800 p-8 shadow-lg">
      <h2 className="mb-2 text-3xl font-bold">Basic Props</h2>
      <p className="mb-8 text-slate-400">
        These examples demonstrate how different props change the behavior and
        appearance of a reusable Button component.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Text Prop */}
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
          <h3 className="mb-2 text-lg font-semibold">text</h3>
          <p className="mb-4 text-sm text-slate-400">
            The <code>text</code> prop controls the label displayed inside the
            button.
          </p>

          <Button text="Click Me" />
        </div>

        {/* Size Prop */}
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
          <h3 className="mb-2 text-lg font-semibold">size</h3>
          <p className="mb-4 text-sm text-slate-400">
            Change the button size using the <code>size</code> prop.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button text="Small" size="small" color="primary" />
            <Button text="Default" color="primary" />
            <Button text="Large" size="large" color="primary" />
          </div>
        </div>

        {/* Color Prop */}
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
          <h3 className="mb-2 text-lg font-semibold">color</h3>
          <p className="mb-4 text-sm text-slate-400">
            The <code>color</code> prop changes the button theme.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button text="Primary" color="primary" />
            <Button text="Secondary" color="Secondary" />
            <Button text="Danger" color="danger" />
          </div>
        </div>

        {/* Disabled Prop */}
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-5">
          <h3 className="mb-2 text-lg font-semibold">disabled</h3>
          <p className="mb-4 text-sm text-slate-400">
            Disable interaction using the <code>disabled</code> prop.
          </p>

          <Button text="Disabled Button" color="danger" disabled />
        </div>

        {/* onClick Prop */}
        <div className="rounded-lg border border-slate-700 bg-slate-900 p-5 md:col-span-2">
          <h3 className="mb-2 text-lg font-semibold">onClick</h3>
          <p className="mb-4 text-sm text-slate-400">
            The <code>onClick</code> prop executes a function when the button is
            pressed.
          </p>

          <div className="flex items-center gap-4">
            <Button
              text="Increment Counter"
              color="Secondary"
              onClick={() => setCounter(counter + 1)}
            />

            <span className="rounded-md bg-slate-700 px-4 py-2 font-semibold">
              Count: {counter}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicProps