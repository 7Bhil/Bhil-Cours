<template>
  <div class="ruby-page bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-red-50 to-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <div class="w-24 h-24 bg-red-100 rounded-lg flex items-center justify-center">
              <svg class="w-16 h-16 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.053-6.22 3.612-9.753h.002z"/>
              </svg>
            </div>
          </div>

          <!-- Texte -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ruby
            </h1>
            <p class="text-xl text-gray-600 mb-6">
              Le langage élégant et productif. Développez des applications web avec Ruby on Rails, des scripts et des APIs modernes.
            </p>
            <div class="flex flex-wrap gap-3 justify-center md:justify-start">
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Web (Rails)
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                Scripting
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                APIs REST
              </span>
              <span class="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
                DevOps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation rapide -->
    <section class="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex space-x-8 overflow-x-auto py-4">
          <button @click="scrollTo('installation')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Installation
          </button>
          <button @click="scrollTo('bases')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Syntaxe de base
          </button>
          <button @click="scrollTo('poo')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Programmation OO
          </button>
          <button @click="scrollTo('frameworks')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Frameworks
          </button>
          <button @click="scrollTo('ressources')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Ressources
          </button>
          <button @click="scrollTo('pratique')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Projets
          </button>
          <button @click="scrollTo('contact')" class="text-sm font-medium text-gray-600 hover:text-red-600 whitespace-nowrap transition-colors focus:outline-none">
            Contact
          </button>
        </nav>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contenu principal -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Installation -->
          <section id="installation" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Installation de Ruby</h2>
            
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">1. Télécharger Ruby</h3>
              <p class="text-gray-600 mb-4">
                Plusieurs options pour installer Ruby selon votre système d'exploitation.
              </p>
              <div class="bg-white border border-gray-200 rounded-lg p-4 mb-4">
                <p class="text-sm text-gray-600 mb-2">Méthodes d'installation :</p>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li><strong>Site officiel :</strong> <a href="https://www.ruby-lang.org" target="_blank" class="text-red-600 hover:text-red-700 underline">ruby-lang.org</a></li>
                  <li><strong>RVM :</strong> <a href="https://rvm.io" target="_blank" class="text-red-600 hover:text-red-700 underline">rvm.io</a> (Linux/macOS)</li>
                  <li><strong>rbenv :</strong> <a href="https://github.com/rbenv/rbenv" target="_blank" class="text-red-600 hover:text-red-700 underline">github.com/rbenv/rbenv</a></li>
                  <li><strong>RubyInstaller :</strong> <a href="https://rubyinstaller.org" target="_blank" class="text-red-600 hover:text-red-700 underline">rubyinstaller.org</a> (Windows)</li>
                </ul>
              </div>
            </div>

            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">2. Installation et configuration</h3>
              
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                <pre># Windows :
# Téléchargez RubyInstaller avec DevKit
# Exécutez l'installateur et suivez les instructions

# macOS (avec Homebrew) :
brew install ruby

# Linux (Ubuntu/Debian) :
sudo apt update
sudo apt install ruby-full

# Avec RVM (recommandé pour développeurs) :
curl -sSL https://get.rvm.io | bash
source ~/.rvm/scripts/rvm
rvm install 3.2.0
rvm use 3.2.0 --default

# Vérification :
ruby -v
gem -v</pre>
              </div>
              
              <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p class="text-sm text-red-800">
                    <strong>Important :</strong> Utilisez Ruby 3.0+ pour les nouveaux projets. RVM ou rbenv sont recommandés pour gérer plusieurs versions.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">3. Éditeurs recommandés</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">VS Code</h4>
                  <p class="text-sm text-gray-600 mb-3">Éditeur populaire avec excellent support Ruby.</p>
                  <a href="https://code.visualstudio.com" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline">
                    Télécharger →
                  </a>
                </div>
                <div class="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 class="font-semibold text-gray-900 mb-2">RubyMine</h4>
                  <p class="text-sm text-gray-600 mb-3">IDE professionnel pour Ruby et Rails.</p>
                  <a href="https://www.jetbrains.com/ruby" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline">
                    Télécharger →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <!-- Syntaxe de base -->
          <section id="bases" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Syntaxe de base de Ruby</h2>
            
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">1. Premier programme Ruby</h3>
              <p class="text-gray-600 mb-4">
                Ruby est connu pour sa syntaxe élégante et lisible, proche du langage naturel.
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre># hello.rb
puts "Hello, World!"

# Exécution :
# ruby hello.rb

# IRB (Interactive Ruby Shell) :
# irb
# > puts "Bonjour Ruby!"
# > exit</pre>
              </div>
            </div>

            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">2. Variables et types</h3>
              <p class="text-gray-600 mb-4">
                Ruby est un langage à typage dynamique. Tout est objet, même les nombres.
              </p>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre># Variables
age = 25                    # Integer
prix = 19.99               # Float
est_vrai = true            # Boolean
nom = "Jean"               # String

# Symboles (identifiants immuables)
statut = :actif
role = :admin

# Tableaux
nombres = [1, 2, 3, 4, 5]
fruits = ["Pomme", "Banane", "Orange"]
mixte = [1, "deux", 3.0, :quatre]

# Hash (dictionnaire)
personne = {
  nom: "Marie",
  age: 30,
  ville: "Paris"
}

# Accès aux valeurs
puts personne[:nom]         # Marie
puts fruits[0]              # Pomme

# Interpolation de chaînes
puts "Je m'appelle #{nom} et j'ai #{age} ans"</pre>
              </div>
            </div>

            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">3. Structures de contrôle</h3>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre># Conditions
note = 15

if note >= 10
  puts "Admis"
elsif note >= 8
  puts "Rattrapage"
else
  puts "Échec"
end

# Condition postfixe
puts "Bravo!" if note >= 15

# Unless (sauf si)
puts "Révise!" unless note >= 10

# Case (switch)
jour = "lundi"
case jour
when "lundi"
  puts "Début de semaine"
when "vendredi"
  puts "Weekend approche!"
else
  puts "Jour normal"
end

# Boucles
# Each
[1, 2, 3, 4, 5].each do |nombre|
  puts nombre
end

# Times
5.times do |i|
  puts "Itération #{i}"
end

# While
compteur = 0
while compteur < 3
  puts "Compteur: #{compteur}"
  compteur += 1
end

# For
for i in 0..4
  puts "i = #{i}"
end</pre>
              </div>
            </div>

            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">4. Méthodes (fonctions)</h3>
              <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre># Méthode simple
def saluer(nom)
  "Bonjour, #{nom}!"
end

puts saluer("Marie")

# Méthode avec valeur par défaut
def presentation(nom, age = 18)
  "Je suis #{nom}, j'ai #{age} ans"
end

puts presentation("Jean")
puts presentation("Marie", 25)

# Méthode avec plusieurs retours
def calculer(a, b)
  somme = a + b
  produit = a * b
  [somme, produit]
end

s, p = calculer(5, 3)
puts "Somme: #{s}, Produit: #{p}"

# Méthode avec bloc
def repeter(n)
  n.times do |i|
    yield(i) if block_given?
  end
end

repeter(3) { |i| puts "Tour #{i + 1}" }

# Arguments variables
def moyenne(*nombres)
  somme = nombres.sum
  somme.to_f / nombres.length
end

puts moyenne(10, 15, 12.5)  # 12.5</pre>
              </div>
            </div>
          </section>

          <!-- POO -->
          <section id="poo" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Programmation Orientée Objet</h2>
            
            <div class="space-y-6">
              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Classes et Objets</h3>
                <p class="text-gray-600 mb-4">
                  En Ruby, tout est objet. Les classes définissent le comportement des objets.
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre># Définition de classe
class Personne
  # Variables de classe
  @@compteur = 0
  
  # Attributs accessibles
  attr_accessor :nom, :age
  attr_reader :id
  
  # Constructeur
  def initialize(nom, age)
    @nom = nom
    @age = age
    @id = @@compteur
    @@compteur += 1
  end
  
  # Méthode d'instance
  def se_presenter
    "Je suis #{@nom}, j'ai #{@age} ans"
  end
  
  # Méthode de classe
  def self.nombre_personnes
    @@compteur
  end
end

# Utilisation
personne1 = Personne.new("Marie", 25)
personne2 = Personne.new("Jean", 30)

puts personne1.se_presenter
puts personne2.se_presenter
puts "Total: #{Personne.nombre_personnes} personnes"</pre>
                </div>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Héritage</h3>
                <p class="text-gray-600 mb-4">
                  L'héritage permet de créer des classes spécialisées basées sur des classes existantes.
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre># Classe parent
class Animal
  attr_accessor :nom
  
  def initialize(nom)
    @nom = nom
  end
  
  def faire_du_bruit
    "L'animal fait du bruit"
  end
end

# Classe enfant
class Chien < Animal
  def initialize(nom, race)
    super(nom)  # Appel du constructeur parent
    @race = race
  end
  
  # Redéfinition (override)
  def faire_du_bruit
    "#{@nom} dit: Wouaf Wouaf!"
  end
  
  def remuer_queue
    "#{@nom} remue la queue"
  end
end

class Chat < Animal
  def faire_du_bruit
    "#{@nom} dit: Miaou!"
  end
end

# Polymorphisme
animaux = [
  Chien.new("Rex", "Labrador"),
  Chat.new("Mimi"),
  Chien.new("Max", "Berger")
]

animaux.each do |animal|
  puts animal.faire_du_bruit
end</pre>
                </div>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">Modules et Mixins</h3>
                <p class="text-gray-600 mb-4">
                  Les modules permettent de partager du code entre plusieurs classes.
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre># Module
module Nageable
  def nager
    "Je nage"
  end
end

module Volant
  def voler
    "Je vole"
  end
end

# Inclusion de modules
class Canard
  include Nageable
  include Volant
  
  attr_accessor :nom
  
  def initialize(nom)
    @nom = nom
  end
  
  def presenter
    "Je suis #{@nom}, #{nager} et #{voler}"
  end
end

class Poisson
  include Nageable
  
  attr_accessor :nom
  
  def initialize(nom)
    @nom = nom
  end
end

canard = Canard.new("Donald")
puts canard.presenter

poisson = Poisson.new("Nemo")
puts poisson.nager</pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Frameworks -->
          <section id="frameworks" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Frameworks Ruby populaires</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-red-600 font-bold text-lg">R</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Ruby on Rails</h3>
                    <p class="text-sm text-gray-600 mb-2">Framework web fullstack MVC</p>
                    <span class="text-xs text-gray-500">Web • API • MVC</span>
                  </div>
                </div>
                <ul class="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Convention over Configuration</li>
                  <li>• Active Record (ORM)</li>
                  <li>• Scaffolding automatique</li>
                  <li>• Gestion des assets</li>
                </ul>
                <a href="https://rubyonrails.org" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline block text-center">
                  Documentation officielle →
                </a>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-blue-600 font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Sinatra</h3>
                    <p class="text-sm text-gray-600 mb-2">Micro-framework web léger</p>
                    <span class="text-xs text-gray-500">API • Microservices</span>
                  </div>
                </div>
                <ul class="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• DSL simple et élégant</li>
                  <li>• Routes intuitives</li>
                  <li>• Parfait pour APIs</li>
                  <li>• Très léger et rapide</li>
                </ul>
                <a href="http://sinatrarb.com" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline block text-center">
                  Documentation officielle →
                </a>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-purple-600 font-bold text-lg">R</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">RSpec</h3>
                    <p class="text-sm text-gray-600 mb-2">Framework de tests BDD</p>
                    <span class="text-xs text-gray-500">Tests • TDD</span>
                  </div>
                </div>
                <ul class="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Syntaxe expressive</li>
                  <li>• Tests comportementaux</li>
                  <li>• Mocking et stubbing</li>
                  <li>• Intégration Rails</li>
                </ul>
                <a href="https://rspec.info" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline block text-center">
                  Documentation officielle →
                </a>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-green-600 font-bold text-lg">B</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Bundler</h3>
                    <p class="text-sm text-gray-600 mb-2">Gestion de dépendances</p>
                    <span class="text-xs text-gray-500">Gems • Dépendances</span>
                  </div>
                </div>
                <ul class="text-sm text-gray-600 space-y-1 mb-4">
                  <li>• Gemfile pour dépendances</li>
                  <li>• Versioning précis</li>
                  <li>• Environnements multiples</li>
                  <li>• Standard Ruby</li>
                </ul>
                <a href="https://bundler.io" target="_blank" class="text-sm text-red-600 hover:text-red-700 font-medium underline block text-center">
                  Documentation officielle →
                </a>
              </div>
            </div>
          </section>

          <!-- Ressources -->
          <section id="ressources" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Ressources de formation</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Guide complet Ruby</h3>
                    <p class="text-sm text-gray-600 mb-2">Cours détaillé de Ruby 3.x</p>
                    <span class="text-xs text-gray-500">PDF • 3.8 MB</span>
                  </div>
                </div>
                <button 
                  @click="downloadPDF('01-ruby-bases.pdf')"
                  class="w-full bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors focus:outline-none"
                >
                  Télécharger le guide
                </button>
              </div>

              <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div class="flex items-start mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-gray-900 mb-1">Exercices pratiques</h3>
                    <p class="text-sm text-gray-600 mb-2">75 exercices avec solutions</p>
                    <span class="text-xs text-gray-500">PDF • 2.1 MB</span>
                  </div>
                </div>
                </div>
                </div>
                </<section>
                    
                </section>>
          <section id="pratique" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Projets pratiques pour débuter</h2>
            
            <div class="space-y-6">
              <!-- Projet 1 -->
              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-start">
                    <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span class="text-red-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">Gestionnaire de tâches</h3>
                      <p class="text-sm text-gray-600">Application console de TODO list</p>
                    </div>
                  </div>
                  <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Débutant</span>
                </div>
                <p class="text-gray-600 mb-4 text-sm">
                  Créez une application console pour gérer vos tâches avec les fonctionnalités CRUD complètes.
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                  <pre># todo.rb
class TaskManager
  def initialize
    @tasks = []
  end
  
  def add_task(description)
    task = { id: @tasks.length + 1, description: description, completed: false }
    @tasks << task
    puts "✓ Tâche ajoutée: #{description}"
  end
  
  def list_tasks
    puts "\n📋 Liste des tâches:"
    @tasks.each do |task|
      status = task[:completed] ? "✅" : "⭕"
      puts "#{status} #{task[:id]}. #{task[:description]}"
    end
  end
  
  def complete_task(id)
    task = @tasks.find { |t| t[:id] == id }
    if task
      task[:completed] = true
      puts "✓ Tâche #{id} marquée comme terminée"
    else
      puts "✗ Tâche non trouvée"
    end
  end
  
  def run
    puts "Bienvenue dans le Gestionnaire de Tâches!"
    loop do
      puts "\n1. Ajouter tâche\n2. Lister tâches\n3. Marquer comme terminée\n4. Quitter"
      print "Choix: "
      choice = gets.chomp.to_i
      
      case choice
      when 1
        print "Description: "
        description = gets.chomp
        add_task(description)
      when 2
        list_tasks
      when 3
        print "ID de la tâche: "
        id = gets.chomp.to_i
        complete_task(id)
      when 4
        puts "Au revoir!"
        break
      end
    end
  end
end

manager = TaskManager.new
manager.run</pre>
                </div>
                <button 
                  @click="copyCode('todo')"
                  class="text-sm text-red-600 hover:text-red-700 font-medium underline"
                >
                  Copier le code →
                </button>
              </div>

              <!-- Projet 2 -->
              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-start">
                    <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span class="text-orange-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">Convertisseur de devises</h3>
                      <p class="text-sm text-gray-600">API simple avec taux de change</p>
                    </div>
                  </div>
                  <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Intermédiaire</span>
                </div>
                <p class="text-gray-600 mb-4 text-sm">
                  Application web simple avec Sinatra pour convertir des devises en utilisant une API externe.
                </p>
                <div class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                  <pre># Gemfile
source 'https://rubygems.org'
gem 'sinatra'
gem 'httparty'
gem 'json'

# app.rb
require 'sinatra'
require 'httparty'
require 'json'

class CurrencyConverter
  API_KEY = 'votre_api_key'  # Obtenez une clé sur exchangerate-api.com
  
  def self.convert(amount, from_currency, to_currency)
    url = "https://v6.exchangerate-api.com/v6/#{API_KEY}/pair/#{from_currency}/#{to_currency}/#{amount}"
    response = HTTParty.get(url)
    data = JSON.parse(response.body)
    
    if data['result'] == 'success'
      {
        amount: amount,
        from: from_currency,
        to: to_currency,
        rate: data['conversion_rate'],
        result: data['conversion_result']
      }
    else
      { error: "Impossible de récupérer les taux de change" }
    end
  end
end

get '/' do
  erb :index
end

get '/convert' do
  amount = params[:amount].to_f
  from = params[:from].upcase
  to = params[:to].upcase
  
  result = CurrencyConverter.convert(amount, from, to)
  content_type :json
  result.to_json
end

# views/index.erb
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;Convertisseur de Devises&lt;/title&gt;
  &lt;style&gt;
    /* Styles CSS */
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="container"&gt;
    &lt;h1&gt;💰 Convertisseur de Devises&lt;/h1&gt;
    &lt;form id="converter"&gt;
      &lt;input type="number" name="amount" placeholder="Montant" required&gt;
      &lt;input type="text" name="from" placeholder="De (USD)" required&gt;
      &lt;input type="text" name="to" placeholder="À (EUR)" required&gt;
      &lt;button type="submit"&gt;Convertir&lt;/button&gt;
    &lt;/form&gt;
    &lt;div id="result"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;script&gt;
    // JavaScript pour gérer la conversion AJAX
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
                </div>
                <button 
                  @click="copyCode('converter')"
                  class="text-sm text-red-600 hover:text-red-700 font-medium underline"
                >
                  Copier le code →
                </button>
              </div>

              <!-- Projet 3 -->
              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-start">
                    <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span class="text-green-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">Blog avec Rails</h3>
                      <p class="text-sm text-gray-600">Application web complète</p>
                    </div>
                  </div>
                  <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Avancé</span>
                </div>
                <p class="text-gray-600 mb-4 text-sm">
                  Créez un blog complet avec Ruby on Rails incluant authentification, CRUD et commentaires.
                </p>
                <div class="space-y-3">
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="text-sm text-gray-600">Scaffolding automatique</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="text-sm text-gray-600">Authentification Devise</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span class="text-sm text-gray-600">Upload d'images avec CarrierWave</span>
                  </div>
                </div>
                <div class="mt-4 bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <pre># Création du projet
rails new blog --database=postgresql
cd blog

# Génération du modèle Article
rails generate scaffold Article title:string content:text published:boolean

# Installation de Devise pour l'authentification
bundle add devise
rails generate devise:install
rails generate devise User
rails generate devise:views

# Configuration des routes
# routes.rb
Rails.application.routes.draw do
  resources :articles
  devise_for :users
  root 'articles#index'
end

# Exécution
rails db:create
rails db:migrate
rails server</pre>
                </div>
                <a 
                  href="https://guides.rubyonrails.org/getting_started.html"
                  target="_blank"
                  class="text-sm text-red-600 hover:text-red-700 font-medium underline block mt-3"
                >
                  Suivre le guide Rails →
                </a>
              </div>
            </div>
          </section>

          <!-- Contact -->
          <section id="contact" class="scroll-mt-32">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Contact et assistance</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Contact direct -->
              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Contact direct</h3>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-gray-600">Email</p>
                      <a href="mailto:7bhilal.chitou7@gmail.com?subject=Question sur Ruby" class="text-red-600 hover:text-red-700 font-medium">
                        7bhilal.chitou7@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm text-gray-600">WhatsApp</p>
                      <a href="https://wa.me/22998874019?text=Bonjour, j'ai une question sur Ruby" target="_blank" class="text-green-600 hover:text-green-700 font-medium">
                        +229 98 874 019
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Formulaire rapide -->
              <div class="bg-white border border-gray-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Envoyer un message</h3>
                <form @submit.prevent="sendMessage" class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Votre email</label>
                    <input 
                      v-model="form.email"
                      type="email" 
                      placeholder="votre@email.com"
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                    <input 
                      v-model="form.subject"
                      type="text" 
                      placeholder="Question sur Ruby..."
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea 
                      v-model="form.message"
                      rows="3"
                      placeholder="Décrivez votre question ou demande..."
                      required
                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    class="w-full bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors focus:outline-none"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-32 space-y-6">
            <!-- Conseils rapides -->
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
                <svg class="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Conseils Ruby
              </h3>
              <ul class="space-y-3">
                <li class="flex items-start text-sm text-gray-600">
                  <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Utilisez <code class="text-red-600 font-mono">irb</code> pour tester rapidement du code</span>
                </li>
                <li class="flex items-start text-sm text-gray-600">
                  <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Les symboles (<code class="text-red-600 font-mono">:symbol</code>) sont plus efficaces que les strings</span>
                </li>
                <li class="flex items-start text-sm text-gray-600">
                  <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Privilégiez <code class="text-red-600 font-mono">each</code> plutôt que les boucles <code class="text-red-600 font-mono">for</code></span>
                </li>
                <li class="flex items-start text-sm text-gray-600">
                  <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Toujours utiliser <code class="text-red-600 font-mono">bundler</code> pour gérer les gems</span>
                </li>
                <li class="flex items-start text-sm text-gray-600">
                  <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Écrivez des tests avec RSpec dès le début</span>
                </li>
              </ul>
            </div>

            <!-- Liens utiles -->
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
                <svg class="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                </svg>
                Liens utiles
              </h3>
              <ul class="space-y-2">
                <li>
                  <a href="https://ruby-lang.org" target="_blank" class="text-sm text-red-600 hover:text-red-700 hover:underline flex items-center">
                    Site officiel Ruby
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://rubygems.org" target="_blank" class="text-sm text-red-600 hover:text-red-700 hover:underline flex items-center">
                    RubyGems (packages)
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://rubyonrails.org" target="_blank" class="text-sm text-red-600 hover:text-red-700 hover:underline flex items-center">
                    Ruby on Rails
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ruby" target="_blank" class="text-sm text-red-600 hover:text-red-700 hover:underline flex items-center">
                    GitHub Ruby
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://stackoverflow.com/questions/tagged/ruby" target="_blank" class="text-sm text-red-600 hover:text-red-700 hover:underline flex items-center">
                    Stack Overflow
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Téléchargements -->
            <div class="bg-white border border-gray-200 rounded-lg p-6">
              <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
                <svg class="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Ressources à télécharger
              </h3>
              <div class="space-y-3">
                <button 
                  @click="downloadPDF('ruby-cheatsheet.pdf')"
                  class="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div class="text-left">
                    <p class="text-sm font-medium text-gray-900">Cheatsheet Ruby</p>
                    <p class="text-xs text-gray-600">Référence rapide</p>
                  </div>
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </button>
                
                <button 
                  @click="downloadPDF('rails-tutorial.pdf')"
                  class="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div class="text-left">
                    <p class="text-sm font-medium text-gray-900">Tutoriel Rails</p>
                    <p class="text-xs text-gray-600">Débuter avec Rails</p>
                  </div>
                  <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RubyPage',
  data() {
    return {
      form: {
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    scrollTo(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Compensate for sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },
    
    downloadPDF(filename) {
      // Simuler un téléchargement
      alert(`Le fichier ${filename} sera téléchargé. En production, cela téléchargerait un vrai fichier.`);
      
      // En production, vous utiliseriez quelque chose comme:
      // const link = document.createElement('a');
      // link.href = `/pdfs/${filename}`;
      // link.download = filename;
      // link.click();
    },
    
    copyCode(project) {
      // Logique pour copier le code dans le presse-papier
      const codeSnippets = {
        todo: document.querySelector('#pratique pre')?.textContent,
        converter: document.querySelectorAll('#pratique pre')[1]?.textContent
      };
      
      const code = codeSnippets[project];
      if (code) {
        navigator.clipboard.writeText(code)
          .then(() => {
            alert('Code copié dans le presse-papier !');
          })
          .catch(err => {
            console.error('Erreur lors de la copie :', err);
            alert('Impossible de copier le code');
          });
      }
    },
    
    sendMessage() {
      if (!this.form.email || !this.form.subject || !this.form.message) {
        alert('Veuillez remplir tous les champs');
        return;
      }
      
      const subject = encodeURIComponent(this.form.subject);
      const body = encodeURIComponent(`Email: ${this.form.email}\n\nMessage:\n${this.form.message}`);
      
      window.location.href = `mailto:7bhilal.chitou7@gmail.com?subject=${subject}&body=${body}`;
      
      // Réinitialiser le formulaire
      this.form = {
        email: '',
        subject: '',
        message: ''
      };
      
      alert('Votre email client s\'ouvre avec le message pré-rempli. Veuillez l\'envoyer.');
    }
  },
  mounted() {
    // Vérifier si une ancre est présente dans l'URL
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      setTimeout(() => this.scrollTo(sectionId), 100);
    }
  }
}
</script>

<style scoped>
.ruby-page {
  min-height: 100vh;
}

/* Style pour la barre de navigation sticky */
.sticky {
  position: sticky;
  z-index: 40;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.95);
}

/* Scroll margin pour compenser la barre sticky */
.scroll-mt-32 {
  scroll-margin-top: 8rem;
}

/* Amélioration de la lisibilité du code */
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.5;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  background-color: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

/* Style pour les liens dans le code */
a {
  transition: color 0.2s ease;
}

/* Effet hover pour les cartes */
.hover-shadow-lg:hover {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Animation pour le défilement */
html {
  scroll-behavior: smooth;
}
</style>