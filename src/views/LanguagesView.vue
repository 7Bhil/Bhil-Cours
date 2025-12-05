<template>
  <div class="languages">
    <!-- En-tête -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Langages de programmation
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Choisissez un langage pour accéder aux résumés, exercices, corrigés et guide d'installation.
      </p>
    </div>

    <!-- Liste des langages -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Python -->
      <div class="card">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl text-yellow-700">🐍</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900">Python</h3>
        </div>
        
        <p class="text-gray-600 mb-6">
          Langage polyvalent pour le web, data science, automation. Parfait pour débuter.
        </p>
        
        <div class="space-y-3">
          <router-link 
            to="/langages/python"
            class="btn-primary w-full text-center block"
          >
            Voir les ressources
          </router-link>
          
          <!-- Contact rapide -->
          <div class="flex space-x-2">
            <a 
              href="mailto:contact@educode.fr?subject=Question sur Python"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center transition"
            >
              📧 Question
            </a>
            <a 
              href="https://wa.me/33612345678?text=Bonjour, j'ai une question sur Python"
              target="_blank"
              class="flex-1 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-center transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- C -->
      <div class="card">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl text-blue-700">©️</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900">C</h3>
        </div>
        
        <p class="text-gray-600 mb-6">
          Langage de bas niveau, base de nombreux systèmes d'exploitation.
        </p>
        
        <div class="space-y-3">
          <router-link 
            to="/langages/c"
            class="btn-primary w-full text-center block"
          >
            Voir les ressources
          </router-link>
          
          <div class="flex space-x-2">
            <a 
              href="mailto:contact@educode.fr?subject=Question sur C"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center transition"
            >
              📧 Question
            </a>
            <a 
              href="https://wa.me/33612345678?text=Bonjour, j'ai une question sur C"
              target="_blank"
              class="flex-1 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-center transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- C++ -->
      <div class="card">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl text-purple-700">➕➕</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900">C++</h3>
        </div>
        
        <p class="text-gray-600 mb-6">
          Extension orientée objet de C, utilisé dans les jeux vidéo et systèmes complexes.
        </p>
        
        <div class="space-y-3">
          <router-link 
            to="/langages/cpp"
            class="btn-primary w-full text-center block"
          >
            Voir les ressources
          </router-link>
          
          <div class="flex space-x-2">
            <a 
              href="mailto:contact@educode.fr?subject=Question sur C++"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center transition"
            >
              📧 Question
            </a>
            <a 
              href="https://wa.me/33612345678?text=Bonjour, j'ai une question sur C++"
              target="_blank"
              class="flex-1 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-center transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- Ruby -->
      <div class="card">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl text-red-700">💎</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900">Ruby</h3>
        </div>
        
        <p class="text-gray-600 mb-6">
          Langage dynamique et élégant, connu pour Ruby on Rails.
        </p>
        
        <div class="space-y-3">
          <router-link 
            to="/langages/ruby"
            class="btn-primary w-full text-center block"
          >
            Voir les ressources
          </router-link>
          
          <div class="flex space-x-2">
            <a 
              href="mailto:contact@educode.fr?subject=Question sur Ruby"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center transition"
            >
              📧 Question
            </a>
            <a 
              href="https://wa.me/33612345678?text=Bonjour, j'ai une question sur Ruby"
              target="_blank"
              class="flex-1 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-center transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- Java -->
      <div class="card">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl text-orange-700">☕</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-900">Java</h3>
        </div>
        
        <p class="text-gray-600 mb-6">
          Langage orienté objet multiplateforme, très utilisé en entreprise.
        </p>
        
        <div class="space-y-3">
          <router-link 
            to="/langages/java"
            class="btn-primary w-full text-center block"
          >
            Voir les ressources
          </router-link>
          
          <div class="flex space-x-2">
            <a 
              href="mailto:contact@educode.fr?subject=Question sur Java"
              class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-center transition"
            >
              📧 Question
            </a>
            <a 
              href="https://wa.me/33612345678?text=Bonjour, j'ai une question sur Java"
              target="_blank"
              class="flex-1 bg-green-100 hover:bg-green-200 text-green-800 py-2 px-4 rounded-lg text-center transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- Placeholder pour nouveau langage -->
      <div class="card border-dashed border-2 border-gray-300 bg-gray-50">
        <div class="flex items-center mb-4">
          <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
            <span class="text-2xl text-gray-500">➕</span>
          </div>
          <h3 class="text-2xl font-bold text-gray-500">Prochainement</h3>
        </div>
        
        <p class="text-gray-500 mb-6">
          D'autres langages seront ajoutés bientôt...
        </p>
        
        <div class="space-y-3">
          <button disabled class="w-full bg-gray-200 text-gray-500 py-2 px-4 rounded-lg text-center">
            Bientôt disponible
          </button>
          
          <a 
            href="mailto:contact@educode.fr?subject=Suggestion de nouveau langage"
            class="block text-center text-blue-600 hover:text-blue-700 font-medium"
          >
            📝 Proposer un langage
          </a>
        </div>
      </div>
    </div>

    <!-- Guide d'utilisation -->
    <div class="mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
      <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">📚 Comment utiliser les ressources</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-xl">📄</span>
          </div>
          <h4 class="font-bold text-gray-900 mb-2">1. Télécharger</h4>
          <p class="text-gray-600 text-sm">Accédez aux PDF et exercices en un clic</p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-xl">💻</span>
          </div>
          <h4 class="font-bold text-gray-900 mb-2">2. Pratiquer</h4>
          <p class="text-gray-600 text-sm">Suivez les guides et faites les exercices</p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span class="text-xl">✅</span>
          </div>
          <h4 class="font-bold text-gray-900 mb-2">3. Vérifier</h4>
          <p class="text-gray-600 text-sm">Consultez les corrigés détaillés</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguagesView'
}
</script>