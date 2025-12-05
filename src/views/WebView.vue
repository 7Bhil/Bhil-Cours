<template>
  <div class="web">
    <!-- En-tête -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Parcours Développement Web
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Apprenez le développement web étape par étape, des bases aux frameworks avancés.
      </p>
    </div>

    <!-- Étapes du parcours -->
    <div class="mb-12">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">🎯 Étapes recommandées</h2>
      
      <div class="relative">
        <!-- Ligne de progression -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
        
        <!-- Étapes -->
        <div class="space-y-8">
          <!-- Étape 1 -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center z-10 mb-4 md:mb-0">
              <span class="font-bold">1</span>
            </div>
            <div class="md:ml-8 text-center md:text-left">
              <h3 class="text-2xl font-bold text-gray-900">HTML & CSS</h3>
              <p class="text-gray-600">Les bases de la création de pages web.</p>
              <router-link to="/web/html-css" class="inline-block mt-2 text-blue-600 font-semibold">
                Voir ressources →
              </router-link>
            </div>
          </div>
          
          <!-- Étape 2 -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center z-10 mb-4 md:mb-0">
              <span class="font-bold">2</span>
            </div>
            <div class="md:ml-8 text-center md:text-left">
              <h3 class="text-2xl font-bold text-gray-900">JavaScript</h3>
              <p class="text-gray-600">Ajoutez de l'interactivité à vos sites.</p>
              <router-link to="/web/javascript" class="inline-block mt-2 text-blue-600 font-semibold">
                Voir ressources →
              </router-link>
            </div>
          </div>
          
          <!-- Étape 3 -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center z-10 mb-4 md:mb-0">
              <span class="font-bold">3</span>
            </div>
            <div class="md:ml-8 text-center md:text-left">
              <h3 class="text-2xl font-bold text-gray-900">Frameworks Frontend</h3>
              <p class="text-gray-600">React, Vue, Next.js pour des applications modernes.</p>
              <div class="flex flex-wrap gap-2 mt-2">
                <router-link to="/web/react" class="text-blue-600 font-semibold text-sm">
                  React
                </router-link>
                <span class="text-gray-400">•</span>
                <router-link to="/web/vue" class="text-blue-600 font-semibold text-sm">
                  Vue.js
                </router-link>
                <span class="text-gray-400">•</span>
                <router-link to="/web/next" class="text-blue-600 font-semibold text-sm">
                  Next.js
                </router-link>
              </div>
            </div>
          </div>
          
          <!-- Étape 4 -->
          <div class="relative flex flex-col md:flex-row items-center">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center z-10 mb-4 md:mb-0">
              <span class="font-bold">4</span>
            </div>
            <div class="md:ml-8 text-center md:text-left">
              <h3 class="text-2xl font-bold text-gray-900">Backend & Bases de données</h3>
              <p class="text-gray-600">Node.js, PHP, Python, bases de données.</p>
              <div class="flex flex-wrap gap-2 mt-2">
                <router-link to="/web/node" class="text-blue-600 font-semibold text-sm">
                  Node.js
                </router-link>
                <span class="text-gray-400">•</span>
                <router-link to="/web/php" class="text-blue-600 font-semibold text-sm">
                  PHP
                </router-link>
                <span class="text-gray-400">•</span>
                <router-link to="/web/django" class="text-blue-600 font-semibold text-sm">
                  Django
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technologies Web -->
    <div>
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">🔧 Technologies disponibles</h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- HTML/CSS -->
        <div class="card text-center">
          <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">📄</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">HTML & CSS</h3>
          <p class="text-gray-600 text-sm mb-4">Structure et style</p>
          <router-link 
            to="/web/html-css"
            class="text-blue-600 font-semibold text-sm"
          >
            Accéder →
          </router-link>
        </div>

        <!-- JavaScript -->
        <div class="card text-center">
          <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">⚡</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">JavaScript</h3>
          <p class="text-gray-600 text-sm mb-4">Web interactif</p>
          <router-link 
            to="/web/javascript"
            class="text-blue-600 font-semibold text-sm"
          >
            Accéder →
          </router-link>
        </div>

        <!-- React -->
        <div class="card text-center">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">⚛️</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">React</h3>
          <p class="text-gray-600 text-sm mb-4">Facebook</p>
          <router-link 
            to="/web/react"
            class="text-blue-600 font-semibold text-sm"
          >
            Accéder →
          </router-link>
        </div>

        <!-- Vue -->
        <div class="card text-center">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🟢</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Vue.js</h3>
          <p class="text-gray-600 text-sm mb-4">Framework progressif</p>
          <router-link 
            to="/web/vue"
            class="text-blue-600 font-semibold text-sm"
          >
            Accéder →
          </router-link>
        </div>

        <!-- PHP -->
        <div class="card text-center">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🐘</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">PHP</h3>
          <p class="text-gray-600 text-sm mb-4">Backend web</p>
          <router-link 
            to="/web/php"
            class="text-blue-600 font-semibold text-sm"
          >
            Accéder →
          </router-link>
        </div>

        <!-- Node.js -->
        <div class="card text-center">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🟩</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Node.js</h3>
          <p class="text-gray-600 text-sm mb-4">JavaScript serveur</p>
          <router-link 
            to="/web/node"
            class="text-blue-600 font-semibold text-sm"
          >
            Accéder →
          </router-link>
        </div>

        <!-- Django -->
        <div class="card text-center">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🐍</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Django</h3>
          <p class="text-gray-600 text-sm mb-4">Python full-stack</p>
          <router-link 
            to="/web/django"
            class="text-blue-600 font-semibold text-sm"
          >
            Accéder →
          </router-link>
        </div>

        <!-- Laravel -->
        <div class="card text-center">
          <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🔥</span>
          </div>
          <h3 class="font-bold text-gray-900 mb-2">Laravel</h3>
          <p class="text-gray-600 text-sm mb-4">Framework PHP</p>
          <router-link 
            to="/web/laravel"
            class="text-blue-600 font-semibold text-sm"
          >
            Accéder →
          </router-link>
        </div>
      </div>
    </div>

    <!-- Projets pratiques -->
    <div class="mt-16 p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
      <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">💼 Projets pratiques inclus</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-gray-900 mb-2">Site portfolio</h4>
          <p class="text-gray-600 text-sm mb-4">HTML, CSS, JavaScript</p>
          <span class="text-green-600 font-semibold text-sm">Niveau: Débutant</span>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-gray-900 mb-2">Todo App</h4>
          <p class="text-gray-600 text-sm mb-4">React ou Vue.js</p>
          <span class="text-yellow-600 font-semibold text-sm">Niveau: Intermédiaire</span>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow">
          <h4 class="font-bold text-gray-900 mb-2">API REST</h4>
          <p class="text-gray-600 text-sm mb-4">Node.js + Express</p>
          <span class="text-red-600 font-semibold text-sm">Niveau: Avancé</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WebView'
}
</script>