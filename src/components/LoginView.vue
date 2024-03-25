<template>
	<main class="position-absolute top-50 start-50 translate-middle">
		<div class="row">
			<div class="card">
				<div class="card-header text-center">
					<h3>Laravel Passport</h3>
				</div>
				<div class="card-body">
					<form @submit.prevent="useLogin.handleLogin(form)">
						<div class="mb-3">
							<label for="email" class="form-label">Email</label>
							<input type="email" v-model="form.email" class="form-control" id="email" />
						</div>
						<div class="mb-3">
							<label for="password" class="form-label">Mot de passe</label>
							<input type="password" v-model="form.password" class="form-control" id="password" />
						</div>
						<div class="text-end">
							<button type="submit" class="btn btn-primary">Se connecter</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from '@/stores/auth';

const useLogin = useAuthStore();

const form = ref({
	email: '',
	password: '',
});
</script>
