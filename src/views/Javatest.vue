<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8 px-4">
    <div class="max-w-4xl mx-auto">
      
      <!-- Écran de résultats final -->
      <div v-if="testCompleted" class="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
        <div class="text-center mb-8">
          <div class="text-6xl mb-4">{{ gradeIcon }}</div>
          <h2 class="text-4xl font-bold text-gray-900 mb-2">Test terminé !</h2>
          <p :class="`text-2xl font-semibold ${gradeColor} mb-6`">{{ grade }}</p>
        </div>

        <div class="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-white mb-8">
          <div class="text-center">
            <div class="text-6xl font-bold mb-2">{{ finalPercentage }}%</div>
            <p class="text-xl">Score global</p>
            <p class="text-sm opacity-90 mt-2">{{ score }} / {{ totalQuestions }} réponses correctes</p>
          </div>
        </div>

        <div class="space-y-6 mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Détails par niveau</h3>
          
          <div v-for="level in [1, 2, 3]" :key="level" class="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div class="flex items-center justify-between mb-3">
              <h4 class="font-semibold text-gray-900">{{ getLevelData(level).title }}</h4>
              <span class="text-sm font-medium text-gray-600">{{ getLevelScore(level) }}/{{ getLevelTotal(level) }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div 
                class="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                :style="{ width: getLevelPercentage(level) + '%' }"
              ></div>
            </div>
            <p class="text-sm text-gray-600">{{ getLevelPercentage(level) }}% de réussite</p>
          </div>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div class="flex items-start">
            <svg class="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
            <div>
              <h4 class="font-semibold text-blue-900 mb-2">Recommandations</h4>
              <ul class="text-sm text-blue-800 space-y-1">
                <li v-for="(recommendation, index) in recommendations" :key="index">{{ recommendation }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Notification d'envoi automatique -->
        <div v-if="emailSent" class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div class="flex items-center">
            <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p class="text-green-800 font-medium">Résultat envoyé par email automatiquement !</p>
          </div>
        </div>

        <!-- Section de partage -->
        <div class="mb-8">
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Partager mon résultat</h4>
          
          <!-- Bouton de partage principal -->
          <button
            @click="toggleShareOptions"
            class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all mb-4 flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
            </svg>
            {{ showShareOptions ? 'Masquer les options' : 'Partager mon résultat' }}
          </button>

          <!-- Options de partage -->
          <div v-if="showShareOptions" class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <button
              @click="shareViaEmail"
              class="bg-gray-100 hover:bg-gray-200 text-gray-800 p-4 rounded-lg flex flex-col items-center justify-center transition-all duration-200"
            >
              <svg class="w-6 h-6 mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span class="text-sm font-medium">Email</span>
            </button>

            <button
              @click="shareViaWhatsApp"
              class="bg-green-100 hover:bg-green-200 text-green-800 p-4 rounded-lg flex flex-col items-center justify-center transition-all duration-200"
            >
              <svg class="w-6 h-6 mb-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.491-8.411"></path>
              </svg>
              <span class="text-sm font-medium">WhatsApp</span>
            </button>

            <button
              @click="shareViaFacebook"
              class="bg-blue-100 hover:bg-blue-200 text-blue-800 p-4 rounded-lg flex flex-col items-center justify-center transition-all duration-200"
            >
              <svg class="w-6 h-6 mb-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
              <span class="text-sm font-medium">Facebook</span>
            </button>

            <button
              @click="shareViaTwitter"
              class="bg-black hover:bg-gray-800 text-white p-4 rounded-lg flex flex-col items-center justify-center transition-all duration-200"
            >
              <svg class="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
              <span class="text-sm font-medium">Twitter/X</span>
            </button>
          </div>

          <!-- Lien à copier -->
          <div v-if="showShareOptions" class="mt-4">
            <p class="text-sm text-gray-600 mb-2">Partagez ce lien :</p>
            <div class="flex gap-2">
              <input
                type="text"
                :value="shareableLink"
                readonly
                class="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-sm"
              />
              <button
                @click="copyToClipboard"
                class="bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all flex items-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Copier
              </button>
            </div>
            <p v-if="copiedToClipboard" class="text-green-600 text-sm mt-2 text-center">
              ✓ Lien copié dans le presse-papier !
            </p>
          </div>
        </div>

        <!-- Bouton recommencer -->
        <button
          @click="resetTest"
          class="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Recommencer le test
        </button>
      </div>

      <!-- Écran du test -->
      <div v-else>
        <!-- Header -->
        <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Test Java - Évaluation de compétences</h1>
              <p class="text-gray-600 mt-1">{{ currentLevelData.title }}</p>
            </div>
            <div class="text-right">
              <div class="text-2xl font-bold text-red-600">{{ score }}/{{ totalQuestions }}</div>
              <div class="text-sm text-gray-600">Score</div>
            </div>
          </div>

          <!-- Progress bar -->
          <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              class="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-300"
              :style="{ width: progressPercentage + '%' }"
            ></div>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <span>Question {{ answers.length + 1 }} / {{ totalQuestions }}</span>
            <span>{{ progressPercentage }}% complété</span>
          </div>
        </div>

        <!-- Question Card -->
        <div class="bg-white rounded-xl shadow-lg p-8">
          <div class="mb-6">
            <div class="flex items-center gap-2 mb-4">
              <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                Niveau {{ currentLevel }}
              </span>
              <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                Question {{ currentQuestion + 1 }}/{{ currentLevelData.questions.length }}
              </span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ question.question }}</h3>
          </div>

          <!-- Code Display -->
          <div v-if="question.code" class="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
            <pre>{{ question.code }}</pre>
          </div>

          <!-- Answer Options - MCQ -->
          <div v-if="question.type === 'mcq'" class="space-y-3">
            <button
              v-for="(option, index) in question.options"
              :key="index"
              @click="handleAnswer(index)"
              :disabled="showResult"
              :class="getOptionClass(index)"
              class="w-full text-left p-4 rounded-lg border-2 transition-all duration-200"
            >
              <div class="flex items-center justify-between">
                <span class="font-medium">{{ option }}</span>
                <svg v-if="showResult && index === question.correct" class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <svg v-if="showResult && index === selectedAnswer && index !== question.correct" class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </button>
          </div>

          <!-- Answer Input - Completion -->
          <div v-if="question.type === 'completion'">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Votre réponse :
            </label>
            <input
              type="text"
              v-model="userInput"
              :disabled="showResult"
              placeholder="Tapez votre réponse ici..."
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none disabled:bg-gray-100 transition-all"
              @keyup.enter="checkAnswer"
            />
          </div>

          <!-- Answer Input - Error Detection -->
          <div v-if="question.type === 'error'">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Numéro de la ligne contenant l'erreur :
            </label>
            <input
              type="number"
              v-model="userInput"
              :disabled="showResult"
              placeholder="Ex: 5"
              min="1"
              class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 focus:outline-none disabled:bg-gray-100 transition-all"
              @keyup.enter="checkAnswer"
            />
          </div>

          <!-- Result Message -->
          <div v-if="showResult" :class="getResultClass()" class="mt-6 p-4 rounded-lg border-2">
            <div class="flex items-start gap-3">
              <svg v-if="lastAnswerCorrect" class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <svg v-else class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p :class="getResultTextClass()" class="font-semibold mb-1">
                  {{ lastAnswerCorrect ? 'Bonne réponse ! 🎉' : 'Réponse incorrecte 💡' }}
                </p>
                <p class="text-sm text-gray-700">{{ question.explanation }}</p>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="mt-6 flex gap-4">
            <button
              v-if="!showResult"
              @click="checkAnswer"
              :disabled="!canSubmit"
              class="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Vérifier
            </button>
            <button
              v-else
              @click="nextQuestion"
              class="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all flex items-center justify-center gap-2"
            >
              {{ getNextButtonText() }}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Info Card -->
        <div class="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div class="text-sm text-blue-800">
              <p class="font-medium mb-1">Astuce pour ce niveau :</p>
              <p>{{ currentLevelData.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaQuizTest',
  data() {
    return {
      currentLevel: 1,
      currentQuestion: 0,
      selectedAnswer: null,
      showResult: false,
      score: 0,
      answers: [],
      testCompleted: false,
      userInput: '',
      selectedQuestions: {},
      
      // Partage
      emailSent: false,
      showShareOptions: false,
      copiedToClipboard: false,
      
      // Pool de questions
      questionPool: {
        level1: {
          title: "Niveau 1 - Fondamentaux Java",
          description: "Questions théoriques sur les bases de Java",
          questions: [
            {
              id: 1,
              type: "mcq",
              question: "Quelle est la méthode principale pour démarrer un programme Java ?",
              code: null,
              options: [
                "public void start()",
                "public static void main(String[] args)",
                "public void main()",
                "static void main(String args)"
              ],
              correct: 1,
              explanation: "La méthode main() doit être public, static, void et accepter String[] args comme paramètre"
            },
            {
              id: 2,
              type: "mcq",
              question: "Quel mot-clé est utilisé pour créer une sous-classe en Java ?",
              code: null,
              options: ["implements", "extends", "inherits", "derives"],
              correct: 1,
              explanation: "Le mot-clé 'extends' est utilisé pour l'héritage de classe. 'implements' est utilisé pour les interfaces."
            },
            {
              id: 3,
              type: "mcq",
              question: "Quelle est la taille d'un type 'int' en Java ?",
              code: null,
              options: ["16 bits", "32 bits", "64 bits", "8 bits"],
              correct: 1,
              explanation: "En Java, le type int occupe 32 bits (4 octets). 'long' occupe 64 bits."
            },
            {
              id: 4,
              type: "mcq",
              question: "Que signifie JVM ?",
              code: null,
              options: [
                "Java Very Machine",
                "Java Virtual Machine",
                "Java Variable Method",
                "Java Version Manager"
              ],
              correct: 1,
              explanation: "JVM = Java Virtual Machine, elle exécute le bytecode Java indépendamment de la plateforme"
            },
            {
              id: 5,
              type: "mcq",
              question: "Quelle collection n'autorise pas les doublons ?",
              code: null,
              options: ["ArrayList", "LinkedList", "HashSet", "HashMap"],
              correct: 2,
              explanation: "HashSet implémente l'interface Set qui n'autorise pas les doublons. Les List autorisent les doublons."
            },
            {
              id: 6,
              type: "mcq",
              question: "Quelle est la différence entre '==' et '.equals()' en Java ?",
              code: null,
              options: [
                "Rien, ils sont identiques",
                "'==' compare les références, '.equals()' compare le contenu",
                "'==' compare le contenu, '.equals()' compare les références",
                "Ils ne sont pas comparables"
              ],
              correct: 1,
              explanation: "'==' compare les références (adresses mémoire) pour les objets, '.equals()' compare les valeurs."
            },
            {
              id: 7,
              type: "mcq",
              question: "Quel est le type de retour du constructeur d'une classe ?",
              code: null,
              options: ["void", "La classe elle-même", "int", "Les constructeurs n'ont pas de type de retour"],
              correct: 3,
              explanation: "Les constructeurs n'ont pas de type de retour, pas même void. Ils retournent implicitement une instance de la classe."
            },
            {
              id: 8,
              type: "mcq",
              question: "Que signifie 'final' lorsqu'il est appliqué à une variable ?",
              code: null,
              options: [
                "La variable ne peut pas être modifiée après son initialisation",
                "La variable est statique",
                "La variable est publique",
                "La variable est optionnelle"
              ],
              correct: 0,
              explanation: "Une variable 'final' ne peut être assignée qu'une seule fois. Pour les objets, la référence ne peut changer."
            },
            {
              id: 9,
              type: "mcq",
              question: "Quelle est la classe mère de toutes les classes en Java ?",
              code: null,
              options: ["Object", "Class", "Main", "Super"],
              correct: 0,
              explanation: "La classe Object est la racine de la hiérarchie des classes. Toutes les classes héritent directement ou indirectement d'Object."
            },
            {
              id: 10,
              type: "mcq",
              question: "Quel mot-clé est utilisé pour gérer les exceptions ?",
              code: null,
              options: ["exception", "error", "try-catch", "check"],
              correct: 2,
              explanation: "try-catch-finally est le mécanisme de gestion des exceptions. On peut aussi utiliser throws pour déclarer une exception."
            }
          ]
        },
        level2: {
          title: "Niveau 2 - Complétion de code",
          description: "Complétez les portions de code manquantes",
          questions: [
            {
              id: 1,
              type: "completion",
              question: "Complétez le code pour créer une boucle qui affiche les nombres de 0 à 4 :",
              code: `for (int i = 0; i < 5; i++) {
    System.out.println(___);
}`,
              correct: "i",
              alternatives: ["i", "I", "(i)"],
              explanation: "La variable 'i' contient le numéro de l'itération et doit être affichée"
            },
            {
              id: 2,
              type: "completion",
              question: "Complétez la déclaration de la méthode pour calculer une somme :",
              code: `public ___ calculerSomme(int a, int b) {
    return a + b;
}`,
              correct: "int",
              alternatives: ["int", "Int"],
              explanation: "Le type de retour doit être 'int' (primitif) car la méthode retourne la somme de deux entiers"
            },
            {
              id: 3,
              type: "completion",
              question: "Complétez le constructeur de la classe Personne :",
              code: `public class Personne {
    private String nom;
    
    public Personne(String nom) {
        ___.nom = nom;
    }
}`,
              correct: "this",
              alternatives: ["this", "This"],
              explanation: "'this' fait référence à l'instance courante de la classe et permet de lever l'ambiguïté"
            },
            {
              id: 4,
              type: "completion",
              question: "Complétez le code pour créer une ArrayList de String :",
              code: `ArrayList<String> liste = new ___<>();`,
              correct: "ArrayList",
              alternatives: ["ArrayList", "ArrayList<String>"],
              explanation: "Avec l'opérateur diamant '<>', le type est inféré automatiquement"
            },
            {
              id: 5,
              type: "completion",
              question: "Complétez le code pour capturer une exception :",
              code: `try {
    int result = 10 / 0;
} ___ (ArithmeticException e) {
    System.out.println("Division par zéro !");
}`,
              correct: "catch",
              alternatives: ["catch", "Catch"],
              explanation: "Le mot-clé 'catch' est utilisé pour capturer et gérer une exception spécifique"
            },
            {
              id: 6,
              type: "completion",
              question: "Complétez l'implémentation de l'interface Animal :",
              code: `public interface Animal {
    void faireDuBruit();
}

public class Chien ___ Animal {
    public void faireDuBruit() {
        System.out.println("Wouf!");
    }
}`,
              correct: "implements",
              alternatives: ["implements", "extends"],
              explanation: "On utilise 'implements' pour implémenter une interface. 'extends' est utilisé pour l'héritage de classe"
            },
            {
              id: 7,
              type: "completion",
              question: "Complétez la déclaration d'une classe abstraite Forme :",
              code: `public ___ class Forme {
    public abstract double calculerAire();
}`,
              correct: "abstract",
              alternatives: ["abstract", "Abstract"],
              explanation: "Le mot-clé 'abstract' définit une classe abstraite qui ne peut pas être instanciée"
            },
            {
              id: 8,
              type: "completion",
              question: "Complétez la méthode pour lire une ligne depuis la console :",
              code: `import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.___();
        scanner.close();
    }
}`,
              correct: "nextLine",
              alternatives: ["nextLine", "readLine"],
              explanation: "La méthode nextLine() de la classe Scanner lit une ligne complète jusqu'au retour chariot"
            },
            {
              id: 9,
              type: "completion",
              question: "Complétez le code pour créer un Thread par héritage :",
              code: `public class MonThread ___ Thread {
    public void run() {
        System.out.println("Thread en cours...");
    }
}`,
              correct: "extends",
              alternatives: ["extends", "implements"],
              explanation: "On étend (extends) la classe Thread pour créer un nouveau thread"
            },
            {
              id: 10,
              type: "completion",
              question: "Complétez le code pour instancier un HashMap :",
              code: `import java.util.HashMap;

public class Test {
    public static void main(String[] args) {
        HashMap<String, Integer> map = ___ HashMap<>();
        map.put("clé", 123);
    }
}`,
              correct: "new",
              alternatives: ["new", "New"],
              explanation: "Le mot-clé 'new' est utilisé pour créer une nouvelle instance d'objet en Java"
            }
          ]
        },
        level3: {
          title: "Niveau 3 - Détection d'erreurs",
          description: "Trouvez la ligne contenant l'erreur (numéro de ligne)",
          questions: [
            {
              id: 1,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Test {
2:     public static void main(String[] args) {
3:         int x = 10;
4:         int y = 0;
5:         int result = x / y;
6:         System.out.println(result);
7:     }
8: }`,
              correct: 5,
              explanation: "Ligne 5 : Division par zéro qui causera une ArithmeticException à l'exécution"
            },
            {
              id: 2,
              type: "error",
              question: "Quelle ligne contient une erreur de syntaxe ?",
              code: `1: public class Animal {
2:     private String nom;
3:     
4:     public Animal(String nom) {
5:         this.nom = nom
6:     }
7: }`,
              correct: 5,
              explanation: "Ligne 5 : Il manque un point-virgule (;) à la fin de l'instruction d'assignation"
            },
            {
              id: 3,
              type: "error",
              question: "Quelle ligne contient une erreur de compilation ?",
              code: `1: public class Calcul {
2:     public static void main(String[] args) {
3:         String texte = "123";
4:         int nombre = Integer.parseInt(texte);
5:         String resultat = nombre + 10;
6:         System.out.println(resultat);
7:     }
8: }`,
              correct: 5,
              explanation: "Ligne 5 : Incompatibilité de types - on ne peut pas assigner un int à une String sans conversion."
            },
            {
              id: 4,
              type: "error",
              question: "Quelle ligne contient une erreur ?",
              code: `1: public class Test {
2:     public void methode1() {
3:         System.out.println("Test");
4:     }
5:     
6:     public static void main(String[] args) {
7:         methode1();
8:     }
9: }`,
              correct: 7,
              explanation: "Ligne 7 : Impossible d'appeler une méthode d'instance (non-static) depuis une méthode static sans créer d'instance"
            },
            {
              id: 5,
              type: "error",
              question: "Quelle ligne contient une erreur d'exécution ?",
              code: `1: public class Tableau {
2:     public static void main(String[] args) {
3:         int[] nombres = {1, 2, 3, 4, 5};
4:         for (int i = 0; i <= nombres.length; i++) {
5:             System.out.println(nombres[i]);
6:         }
7:     }
8: }`,
              correct: 4,
              explanation: "Ligne 4 : La condition i <= nombres.length causera un ArrayIndexOutOfBoundsException."
            },
            {
              id: 6,
              type: "error",
              question: "Quelle ligne causera une NullPointerException ?",
              code: `1: public class NullTest {
2:     public static void main(String[] args) {
3:         String str = null;
4:         System.out.println(str.length());
5:     }
6: }`,
              correct: 4,
              explanation: "Ligne 4 : NullPointerException car on essaie d'appeler .length() sur une référence null"
            },
            {
              id: 7,
              type: "error",
              question: "Quelle ligne contient une erreur de compilation ?",
              code: `1: public class Heritage {
2:     class Parent {
3:         private void method() {}
4:     }
5:     class Child extends Parent {
6:         @Override
7:         public void method() {}
8:     }
9: }`,
              correct: 7,
              explanation: "Ligne 7 : Impossible de redéfinir (@Override) une méthode privée du parent."
            },
            {
              id: 8,
              type: "error",
              question: "Quelle ligne causera une ClassCastException ?",
              code: `1: public class Cast {
2:     public static void main(String[] args) {
3:         Object obj = "Hello";
4:         Integer num = (Integer) obj;
5:         System.out.println(num);
6:     }
7: }`,
              correct: 4,
              explanation: "Ligne 4 : ClassCastException - on ne peut pas caster une String en Integer."
            },
            {
              id: 9,
              type: "error",
              question: "Quelle ligne contient une erreur de compilation ?",
              code: `1: import java.util.ArrayList;
2: import java.util.List;
3: 
4: public class Generics {
5:     public static void main(String[] args) {
6:         List<String> list = new ArrayList<String>();
7:         list.add("Hello");
8:         list.add(123);
9:     }
10: }`,
              correct: 8,
              explanation: "Ligne 8 : Type mismatch - on ne peut pas ajouter un Integer à une List<String>."
            },
            {
              id: 10,
              type: "error",
              question: "Quelle ligne causera une ArrayIndexOutOfBoundsException ?",
              code: `1: public class ArrayInit {
2:     public static void main(String[] args) {
3:         int[] arr = new int[5];
4:         arr[5] = 10;
5:     }
6: }`,
              correct: 4,
              explanation: "Ligne 4 : ArrayIndexOutOfBoundsException - pour un tableau de taille 5, les indices valides sont 0 à 4."
            }
          ]
        }
      },
      questionsPerLevel: {
        level1: 5,
        level2: 5,
        level3: 5
      }
    }
  },
  computed: {
    currentLevelData() {
      const levelKey = `level${this.currentLevel}`;
      if (!this.selectedQuestions[levelKey]) {
        return this.questionPool[levelKey] || {
          title: "Niveau en cours",
          description: "Chargement...",
          questions: []
        };
      }
      return this.selectedQuestions[levelKey];
    },
    question() {
      const questions = this.currentLevelData.questions || [];
      if (this.currentQuestion >= questions.length) {
        return {};
      }
      return questions[this.currentQuestion];
    },
    totalQuestions() {
      return Object.values(this.questionsPerLevel).reduce((sum, count) => sum + count, 0);
    },
    progressPercentage() {
      const total = this.totalQuestions || 1;
      return Math.min(100, Math.max(0, ((this.answers.length / total) * 100).toFixed(0)));
    },
    finalPercentage() {
      const total = this.totalQuestions || 1;
      return ((this.score / total) * 100).toFixed(1);
    },
    grade() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) return "Excellent";
      if (percentage >= 75) return "Très bien";
      if (percentage >= 60) return "Bien";
      if (percentage >= 50) return "Passable";
      return "À améliorer";
    },
    gradeColor() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) return "text-green-600";
      if (percentage >= 75) return "text-blue-600";
      if (percentage >= 60) return "text-yellow-600";
      if (percentage >= 50) return "text-orange-600";
      return "text-red-600";
    },
    gradeIcon() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) return "🏆";
      if (percentage >= 75) return "⭐";
      if (percentage >= 60) return "👍";
      if (percentage >= 50) return "📚";
      return "💪";
    },
    recommendations() {
      const percentage = parseFloat(this.finalPercentage);
      if (percentage >= 90) {
        return [
          "• Excellente maîtrise de Java ! Vous êtes prêt pour des projets avancés.",
          "• Explorez Spring Boot et les design patterns."
        ];
      }
      if (percentage >= 75) {
        return [
          "• Très bon niveau ! Continuez à pratiquer avec des projets concrets.",
          "• Révisez les concepts où vous avez eu des difficultés."
        ];
      }
      if (percentage >= 60) {
        return [
          "• Bon niveau de base. Pratiquez davantage avec des exercices.",
          "• Concentrez-vous sur les niveaux 2 et 3."
        ];
      }
      return [
        "• Révisez les fondamentaux de Java (POO, syntaxe de base).",
        "• Pratiquez régulièrement avec des exercices simples.",
        "• Consultez les ressources de formation disponibles."
      ];
    },
    canSubmit() {
      if (!this.question.type) return false;
      
      if (this.question.type === 'mcq') {
        return this.selectedAnswer !== null;
      }
      if (this.question.type === 'error') {
        const input = parseInt(this.userInput);
        return !isNaN(input) && input > 0;
      }
      return this.userInput.trim() !== '';
    },
    lastAnswerCorrect() {
      return this.answers.length > 0 && this.answers[this.answers.length - 1].correct;
    },
    shareMessage() {
      return `J'ai obtenu ${this.finalPercentage}% au test Java ! 🎯\n` +
             `Score: ${this.score}/${this.totalQuestions}\n` +
             `Niveau 1: ${this.getLevelPercentage(1)}%\n` +
             `Niveau 2: ${this.getLevelPercentage(2)}%\n` +
             `Niveau 3: ${this.getLevelPercentage(3)}%\n` +
             `#JavaQuiz #Programmation`;
    },
    shareableLink() {
      // Générer un lien unique basé sur le résultat
      const resultData = {
        score: this.score,
        total: this.totalQuestions,
        percentage: this.finalPercentage,
        date: new Date().toISOString(),
        levels: {
          1: this.getLevelPercentage(1),
          2: this.getLevelPercentage(2),
          3: this.getLevelPercentage(3)
        }
      };
      const encodedData = btoa(JSON.stringify(resultData));
      return `${window.location.origin}${window.location.pathname}?result=${encodedData}`;
    },
    emailBody() {
      let body = `RÉSULTAT DU TEST JAVA\n`;
      body += `====================\n\n`;
      body += `Score global : ${this.finalPercentage}%\n`;
      body += `Note : ${this.score}/${this.totalQuestions}\n\n`;
      
      body += `DÉTAILS PAR NIVEAU\n`;
      body += `=================\n`;
      
      for (let level of [1, 2, 3]) {
        const levelData = this.getLevelData(level);
        const score = this.getLevelScore(level);
        const total = this.getLevelTotal(level);
        const percentage = this.getLevelPercentage(level);
        
        body += `${levelData.title} : ${score}/${total} - ${percentage}%\n`;
      }
      
      body += `\nAPPRÉCIATION : ${this.grade}\n\n`;
      
      body += `RECOMMANDATIONS\n`;
      body += `===============\n`;
      this.recommendations.forEach(rec => {
        body += `${rec}\n`;
      });
      
      body += `\nDate : ${new Date().toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}\n`;
      
      return body;
    }
  },
  watch: {
    testCompleted(newVal) {
      if (newVal) {
        // Envoyer automatiquement par email quand le test est terminé
        this.sendAutoEmail();
        
        // Sauvegarder le résultat
        this.saveResult();
      }
    }
  },
  methods: {
    selectRandomQuestions() {
      const selected = {};
      
      for (const level in this.questionPool) {
        const pool = this.questionPool[level];
        const questionsNeeded = this.questionsPerLevel[level];
        
        let availableQuestions = [...pool.questions];
        const selectedQuestions = [];
        
        for (let i = 0; i < Math.min(questionsNeeded, availableQuestions.length); i++) {
          const randomIndex = Math.floor(Math.random() * availableQuestions.length);
          selectedQuestions.push(availableQuestions[randomIndex]);
          availableQuestions.splice(randomIndex, 1);
        }
        
        selected[level] = {
          title: pool.title,
          description: pool.description,
          questions: selectedQuestions
        };
      }
      
      this.selectedQuestions = selected;
    },
    
    handleAnswer(index) {
      this.selectedAnswer = index;
    },
    
    checkAnswer() {
      if (!this.canSubmit) return;
      
      let isCorrect = false;

      if (this.question.type === "mcq") {
        isCorrect = this.selectedAnswer === this.question.correct;
      } else if (this.question.type === "completion") {
        const userAnswer = this.userInput.trim().toLowerCase();
        isCorrect = this.question.alternatives.some(alt => 
          userAnswer === alt.toLowerCase()
        );
      } else if (this.question.type === "error") {
        isCorrect = parseInt(this.userInput) === this.question.correct;
      }

      this.answers.push({
        level: this.currentLevel,
        question: this.currentQuestion,
        correct: isCorrect
      });

      if (isCorrect) {
        this.score++;
      }

      this.showResult = true;
    },
    
    nextQuestion() {
      const questions = this.currentLevelData.questions || [];
      
      if (this.currentQuestion < questions.length - 1) {
        this.currentQuestion++;
      } else if (this.currentLevel < 3) {
        this.currentLevel++;
        this.currentQuestion = 0;
      } else {
        this.testCompleted = true;
      }
      
      this.selectedAnswer = null;
      this.userInput = '';
      this.showResult = false;
    },
    
    resetTest() {
      this.currentLevel = 1;
      this.currentQuestion = 0;
      this.selectedAnswer = null;
      this.showResult = false;
      this.score = 0;
      this.answers = [];
      this.testCompleted = false;
      this.userInput = '';
      this.emailSent = false;
      this.showShareOptions = false;
      this.copiedToClipboard = false;
      
      this.selectRandomQuestions();
    },
    
    getOptionClass(index) {
      if (!this.showResult) {
        if (this.selectedAnswer === index) {
          return 'border-red-500 bg-red-50 hover:bg-red-100';
        }
        return 'border-gray-200 hover:border-red-300 hover:bg-gray-50';
      }
      
      if (index === this.question.correct) {
        return 'border-green-500 bg-green-50';
      }
      if (index === this.selectedAnswer && index !== this.question.correct) {
        return 'border-red-500 bg-red-50';
      }
      return 'border-gray-200 bg-gray-50';
    },
    
    getResultClass() {
      return this.lastAnswerCorrect 
        ? 'bg-green-50 border-green-200' 
        : 'bg-red-50 border-red-200';
    },
    
    getResultTextClass() {
      return this.lastAnswerCorrect 
        ? 'text-green-900' 
        : 'text-red-900';
    },
    
    getNextButtonText() {
      if (this.currentQuestion < this.currentLevelData.questions.length - 1) {
        return 'Question suivante';
      }
      if (this.currentLevel < 3) {
        return 'Niveau suivant';
      }
      return 'Voir les résultats';
    },
    
    getLevelData(level) {
      const levelKey = `level${level}`;
      return this.selectedQuestions[levelKey] || this.questionPool[levelKey] || { title: `Niveau ${level}`, questions: [] };
    },
    
    getLevelScore(level) {
      const levelAnswers = this.answers.filter(a => a.level === level);
      return levelAnswers.filter(a => a.correct).length;
    },
    
    getLevelTotal(level) {
      return this.questionsPerLevel[`level${level}`] || 0;
    },
    
    getLevelPercentage(level) {
      const score = this.getLevelScore(level);
      const total = this.getLevelTotal(level);
      return total > 0 ? Math.round((score / total) * 100) : 0;
    },
    
    // Méthodes de partage
    sendAutoEmail() {
      const subject = `Mon résultat Test Java : ${this.finalPercentage}%`;
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(this.emailBody);
      
      const mailtoLink = `mailto:?subject=${encodedSubject}&body=${encodedBody}`;
      
      // Ouvrir dans un nouvel onglet
      setTimeout(() => {
        window.open(mailtoLink, '_blank');
        this.emailSent = true;
      }, 1000);
    },
    
    toggleShareOptions() {
      this.showShareOptions = !this.showShareOptions;
    },
    
    shareViaEmail() {
      const subject = `Regarde mon résultat Test Java : ${this.finalPercentage}%`;
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(this.emailBody);
      
      window.open(`mailto:?subject=${encodedSubject}&body=${encodedBody}`, '_blank');
    },
    
    shareViaWhatsApp() {
      const text = encodeURIComponent(this.shareMessage + '\n\n' + this.shareableLink);
      window.open(`https://wa.me/?text=${text}`, '_blank');
    },
    
    shareViaFacebook() {
      const url = encodeURIComponent(this.shareableLink);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
    },
    
    shareViaTwitter() {
      const text = encodeURIComponent(this.shareMessage);
      const url = encodeURIComponent(this.shareableLink);
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'width=600,height=400');
    },
    
    copyToClipboard() {
      navigator.clipboard.writeText(this.shareableLink)
        .then(() => {
          this.copiedToClipboard = true;
          setTimeout(() => {
            this.copiedToClipboard = false;
          }, 3000);
        })
        .catch(() => {
          // Fallback pour anciens navigateurs
          const textArea = document.createElement('textarea');
          textArea.value = this.shareableLink;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          this.copiedToClipboard = true;
          setTimeout(() => {
            this.copiedToClipboard = false;
          }, 3000);
        });
    },
    
    saveResult() {
      const result = {
        score: this.score,
        total: this.totalQuestions,
        percentage: this.finalPercentage,
        grade: this.grade,
        date: new Date().toISOString(),
        levels: {
          1: this.getLevelPercentage(1),
          2: this.getLevelPercentage(2),
          3: this.getLevelPercentage(3)
        }
      };
      
      localStorage.setItem('javaTestResult', JSON.stringify(result));
    }
  },
  created() {
    this.selectRandomQuestions();
    
    // Essayer de récupérer un résultat précédent
    const savedResult = localStorage.getItem('javaTestResult');
    if (savedResult) {
      try {
        const result = JSON.parse(savedResult);
        console.log('Résultat précédent:', result);
      } catch (e) {
        console.error('Erreur lors du chargement du résultat:', e);
      }
    }
  }
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Courier New', monospace;
  line-height: 1.4;
  tab-size: 2;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

input:focus {
  outline: none;
}

/* Animation pour le bouton copié */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.text-green-600 {
  animation: fadeIn 0.3s ease-in-out;
}

/* Amélioration de la lisibilité */
.bg-gradient-to-r {
  background-size: 200% auto;
  transition: background-position 0.5s ease;
}

.bg-gradient-to-r:hover {
  background-position: right center;
}

/* Amélioration du focus */
.focus\:ring-2:focus {
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}
</style>