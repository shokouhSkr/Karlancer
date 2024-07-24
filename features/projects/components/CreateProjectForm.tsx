"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";
import { CreateProjectFormPropType } from "@/types";
import { DatePickerField, Loading, Select, TextField } from "@/features";

const CreateProjectForm = ({ onClose, projectToEdit = {} }: CreateProjectFormPropType) => {
	// projectToEdit is optional, if there is one, we destruct _id from it.
	const { _id: editId } = projectToEdit;
	const isEditingSession = Boolean(editId);

	const { title, description, budget, category, deadline, tags: projectTags } = projectToEdit;
	let editValues = {};
	if (isEditingSession) {
		// We handle "tags" and "deadline" below in default values of useStates.
		editValues = {
			title,
			description,
			budget,
			category: category._id,
		};
	}

	// React-hook-form: register => with this, we don't need to pass onChange, value, onBlur, ... to the form. it does automatically by using "name" attribute.
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ defaultValues: editValues });

	const [tags, setTags] = useState<string[]>(projectTags || []);
	const [date, setDate] = useState<Date>(new Date(deadline || ""));
	const { newCategories: categories } = useCategories();
	const { isCreating, mutateAsync: createProject } = useCreateProject();
	const { isEditing, mutateAsync: editProject } = useEditProject();

	const onSubmit = async (data: any) => {
		console.log(data); // The whole data that comes from form automatically

		const newProject = { ...data, deadline: new Date(date).toISOString(), tags };

		if (isEditingSession) {
			editProject(
				{ id: editId, newProject },
				{
					onSuccess: () => {
						onClose();
						reset();
					},
				}
			);
		} else {
			createProject(newProject, {
				onSuccess: () => {
					onClose();
					reset();
				},
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
			<TextField
				label="پروژه"
				name="title"
				register={register}
				required
				error={errors}
				validationSchema={{
					required: "عنوان ضروری است",
					minLength: {
						value: 10,
						message: "حداقل تعداد کارکترها 10 است",
					},
				}}
			/>
			<TextField
				label="توضیحات"
				name="description"
				register={register}
				required
				error={errors}
				validationSchema={{
					required: "توضیحات ضروری است",
					minLength: {
						value: 10,
						message: "حداقل 10 کاراکتر را وارد کنید",
					},
				}}
			/>
			<TextField
				label="بودجه"
				name="budget"
				type="number"
				register={register}
				required
				error={errors}
				validationSchema={{
					required: "بودجه ضروری است",
				}}
			/>
			<Select label="دسته بندی" name="category" register={register} options={categories} required />

			<div>
				<label className="mb-2 block text-secondary-700">برچسب ها</label>
				<TagsInput name="tags" value={tags} onChange={setTags} />
			</div>

			<DatePickerField label="ددلاین" date={date} setDate={setDate} />

			<div>
				<button type="submit" className="btn">
					{isCreating ? <Loading color="bg-secondary-0" /> : "تایید"}
				</button>
			</div>
		</form>
	);
};

export default CreateProjectForm;
