import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"
import { Form } from "react-router-dom"
import { useNavigation } from "react-router-dom"
import { cn } from "@/lib/utils"
export function LoginForm() {
    const { state } = useNavigation()
    
    return (
        <div className="flex items-center justify-center bg-background px-4 py-12">
            <div className="w-full max-w-md">
                <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
                    {/* Title */}
                    <h1 className="mb-8 text-center text-3xl font-bold text-foreground">Shop</h1>

                    {/* Form */}
                    <Form className="space-y-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-sm font-medium">
                                Nom
                            </Label>
                            <Input
                                id="name"
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
                                type="email"
                                placeholder="Entrez votre email"
                                required
                                className="w-full"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={state === "submitting"}
                            className={cn("w-full", state === "submitting" && "opacity-50 cursor-not-allowed")}
                            size="lg"
                            
                        >
                            Connecter
                        </Button>
                    </Form>

                    {/* Sign up link */}
                    <p className="mt-6 text-center text-sm text-muted-foreground">
                        Vous avez déjà un compte ?{" "}
                        <Link to="/signup" className="font-medium text-primary hover:underline">
                            Inscrivez-vous
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
