"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm, FormProvider} from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    //add the form fields here.
    full_name: z.string().min(10, {
        message: "your full name must be at least 10 characters in length."
    }).max(50, {
        message: "Your full name cannot be more than 50 characters in length."
    }),
    email: z.string().email({
        message: "Please enter a valid email address."
    }),
    message: z.string()
})

export function ContactForm(){
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        // need to provide deafult values for form fields
        // since FormField uses controlled components.
        defaultValues:{
            full_name:"",
            email:"",
            message:"",
        }
    })

    return(
        <>
            <div className = "flex items-center justify-center mx-auto p-6 border-1 rounded-lg shadow-md bg-black/20">
                <FormProvider {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className = "space-y-8 w-full">
                        <FormField 
                            control = {form.control} 
                            name="full_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name Here" className = "w-full" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} 
                        />
                        <FormField 
                            control = {form.control} 
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="example@gmail.com" className = "w-full" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} 
                        />
                        <FormField 
                            control = {form.control} 
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Type your message here." className = "w-full resize-none" {...field}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} 
                        />
                        <Button type="submit" className = "w-full inline-block bg-gradient-to-r from-blue-400 to-white transform transition duration-200 hover:opacity-70">Submit</Button>
                    </form>
                </FormProvider>
            </div>
        </>
    )
}

// submit handler for form.
function onSubmit(values: z.infer<typeof formSchema>){
    // type-safe.
    console.log(values);
}