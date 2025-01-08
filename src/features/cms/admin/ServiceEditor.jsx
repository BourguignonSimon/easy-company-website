import React from 'react';
import { useForm } from 'react-hook-form';

export default function ServiceEditor({ service }) {
  const { register, handleSubmit } = useForm({
    defaultValues: service,
  });

  const onSubmit = async (data) => {
    // Handle service update
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          {...register('title')}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
      </div>
      {/* Add other fields */}
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
      >
        Save Changes
      </button>
    </form>
  );
}