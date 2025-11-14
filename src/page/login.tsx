import { Form, useNavigation, useActionData, redirect, replace } from "react-router-dom";
import { supabase } from "@/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export async function loginAction({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) return { error: error.message };

    return redirect("/"); // ou page d’accueil
}

export function LoginForm() {
    const { state } = useNavigation();
    const actionData = useActionData();

    return (
        <div className="flex justify-center items-center h-screen ">

            <div className="max-w-md w-full border py-12 px-4 rounded-sm border-gray-400">
                <h1 className="mb-8 text-center text-3xl font-bold text-foreground">Connecter</h1>
                <Form method="post" className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required placeholder="Entrez votre Email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input id="password" name="password" type="password" required placeholder="Entrez votre mot de passe" />
                    </div>

                    {actionData?.error && <p className="text-red-500">{actionData.error}</p>}

                    <Button
                        type="submit"
                        disabled={state === "submitting"}
                        className={cn("w-full", state === "submitting" && "opacity-50 cursor-not-allowed")}
                    >
                        Se connecter
                    </Button>
                </Form>
            </div>
        </div>
    );
}
