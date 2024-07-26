"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { ProjectFormPropType } from "@/types";
import { DatePickerField, Loading, Select, TagField, TextField } from "@/features";
import { useCategories } from "@/features/category/hooks/useCategories";
import { useCreateProject } from "../hooks/useCreateProject";
import { useEditProject } from "../hooks/useEditProject";

type FormValues = {
	budget: string;
	category: string;
	description: string;
	title: string;
	tags: string[];
	date: Date;
};

const ProjectForm = ({ onClose, projectToEdit = {} }: ProjectFormPropType) => {
	// projectToEdit is optional, if there is one, we destruct _id from it.
	const { _id: editId } = projectToEdit;
	const isEditingSession = Boolean(editId);

	const { title, description, budget, category, deadline, tags: projectTags } = projectToEdit;

	let editValues = {};
	if (isEditingSession) {
		// We will handle "tags" and "deadline" below in default values of useStates.
		editValues = {
			title,
			description,
			budget,
			category: category._id,
		};
	}

	// React-hook-form: register => with this, we don't need to pass onChange, value, onBlur, ... to the form. it does automatically by using "name" attribute. also we don't need useStates.
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({ defaultValues: editValues }); // If there is a projectToEdit, we will use its values as default values (so the values already there when open edit form).

	// Cause we don't use react-hook-form for "tags" and "date", we write states for them.
	const [tags, setTags] = useState<string[]>(projectTags || []);
	const [date, setDate] = useState<Date>(new Date(deadline || ""));
	const { newCategories: categories } = useCategories();
	const { isCreating, createProject } = useCreateProject();
	const { isEditing, editProject } = useEditProject();

	const onSubmit = async (data: FormValues) => {
		console.log(data); // The whole data that comes from form automatically
		const newProject = { ...data, tags, deadline: new Date(date).toISOString() };

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
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			<TextField
				label="پروژه"
				name="title"
				register={register}
				required
				error={errors}
				validationSchema={{
					required: "عنوان ضروری است.",
					minLength: {
						value: 10,
						message: "حداقل تعداد کارکترها 10 است.",
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
					required: "توضیحات ضروری است.",
					minLength: {
						value: 10,
						message: "حداقل تعداد کارکترها 10 است.",
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
					required: "بودجه ضروری است.",
				}}
			/>
			<Select label="دسته بندی" name="category" register={register} options={categories} required />
			<DatePickerField label="ددلاین" date={date} setDate={setDate} />
			<TagField label="برچسب ها" name="tags" value={tags} onChange={setTags} />

			<div className="flex items-center gap-4 justify-end">
				<button
					onClick={onClose}
					className="btn w-20 mb-2 bg-secondary-0 text-primary-900 border border-primary-900 hover:bg-secondary-0"
				>
					لغو
				</button>
				<button type="submit" className="btn w-20 mb-2">
					{isCreating || isEditing ? <Loading color="#fff" /> : "تایید"}
				</button>
			</div>
		</form>
	);
};

export default ProjectForm;
