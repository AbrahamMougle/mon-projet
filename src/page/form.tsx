import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, Form, useActionData, useNavigation, redirect } from "react-router-dom";
import { supabase } from "@/supabaseClient";
import { cn } from "@/lib/utils";
import type { ActionFunctionArgs } from "react-router-dom";

export async function action({ request }: ActionFunctionArgs) {
    console.log(request);

    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // 1️⃣ Création utilisateur Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
    });

    if (authError) {
        return { error: authError.message };
    }

    // 2️⃣ Création profil (table profiles)
    const { error: profileError } = await supabase.from("profiles").insert({
        id: authData.user?.id,
        name,
    });

    if (profileError) {
        return { error: profileError.message };
    }

    // 3️⃣ Redirection vers page welcome/dashboard
    return redirect("/");
}

export function SignForm() {
    const { state } = useNavigation();
    const actionData = useActionData();

    return (
        <div className="flex items-center justify-center bg-background px-4 py-12">
            <div className="w-full max-w-md">
                <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
                    {/* Title */}
                    <h1 className="mb-8 text-center text-3xl font-bold text-foreground">Créer un compte</h1>

                    {/* Form */}
                    <Form method="post" className="space-y-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium">
                                Nom
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Entrez votre nom"
                                required
                                className="w-full"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-sm font-medium">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Entrez votre email"
                                required
                                className="w-full"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-sm font-medium">
                                Mot de passe
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Entrez votre mot de passe"
                                required
                                className="w-full"
                            />
                        </div>

                        {/* Error message */}
                        {actionData?.error && (
                            <p className="text-red-500 text-sm">{actionData.error}</p>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={state === "submitting"}
                            className={cn(
                                "w-full",
                                state === "submitting" && "opacity-50 cursor-not-allowed"
                            )}
                            size="lg"
                        >
                            S’inscrire
                        </Button>
                    </Form>

                    {/* Login link */}
                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Vous avez déjà un compte ?{" "}
                        <Link to="/login" className="font-medium text-primary hover:underline">
                            Connectez-vous
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
